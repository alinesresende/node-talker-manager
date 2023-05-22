const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const { checkNameAndAGeExist, 
  checkNameValidade, 
  checkAgeValidade, 
  checkTalkExist, 
  checkWatchedAtExist, 
  checkRateExist, 
  checkRateIsDecimal, 
  handleDataExist, 
  handleValidation, 
  generateToken,
  checkAuthentication, 
  checkRateFromQuery, 
  ckeckQfromQuery, 
  checkWatchedAtFromQuery, 
  checkRateExistFromBody, checkRateIsDecimalFromBody } = require('./middlewares/helpers');

const app = express();
app.use(express.json());
const connection = require('./db/connection');

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar /
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

const pathManager = './talker.json';

const readManager = async () => {
  try {
    const read = await fs.readFile(path.resolve(__dirname, pathManager), 'utf-8');
    return JSON.parse(read);
  } catch (err) {
    console.error(err);
  }
};

app.get('/talker/db', async (req, res) => {
  const [result] = await connection.execute('SELECT * FROM TalkerDB.talkers');
  const newResult = result.map((manager) => ({
      age: manager.age,
      id: manager.id,
      name: manager.name,
      talk: {
        rate: manager.talk_rate,
        watchedAt: manager.talk_watched_at,
      },
    }));
  res.status(200).json(newResult);
});

app.get('/talker', async (req, res) => {
  const managers = await readManager();
  if (managers) {
   return res.status(200).json(managers);
  } 
   return [];
});

app.get('/talker/search', checkAuthentication, 
checkRateFromQuery, ckeckQfromQuery, checkWatchedAtFromQuery, async (req, res) => {
  const managers = await readManager();
  const { rate, q, date } = req.query;
    const managersFilteredByQ = managers.filter((manager) => manager.name.includes(q) || !q);
    const filteredFromQueries = managersFilteredByQ.filter((manager) => 
    (manager.talk.rate === Number(rate) || !rate) && (manager.talk.watchedAt === date || !date));
    return res.status(200).json(filteredFromQueries);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const managers = await readManager(); 
  const manager = managers.find((managerItem) => +id === managerItem.id);
  if (manager) {
    return res.status(200).json(manager);
  } 
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
});

app.post('/login', handleDataExist, handleValidation, (req, res) => {
  const { email, password } = req.body;
  const generateTokenLogin = generateToken();
  const newLogin = {
    email,
    password,
  };
  if (newLogin) {
    res.status(200).json({
      token: generateTokenLogin,
    });
  }
});

app.post('/talker', checkAuthentication, checkNameAndAGeExist, checkNameValidade, checkAgeValidade,
checkTalkExist, checkWatchedAtExist, checkRateExist, checkRateIsDecimal, async (req, res) => {
  const managers = await readManager(); 
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const nextId = managers.length + 1;
  const newManager = {
    id: nextId,
    name, 
    age, 
    talk: {
      watchedAt,
      rate,
    },
  };
  managers.push(newManager);
  fs.writeFile(path.resolve(__dirname, pathManager), JSON.stringify(managers));
  return res.status(201).json(newManager);
});

const checkSpeakerPerson = async (req, res, next) => {
  const managers = await readManager(); 
  const { id } = req.params;
  const isSpeakerPerson = managers.find((person) => +id === person.id);
  if (!isSpeakerPerson) {
    res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  } else {
    next();
  }
};

app.put('/talker/:id', checkAuthentication, checkNameAndAGeExist, checkNameValidade, 
checkAgeValidade, checkTalkExist, checkWatchedAtExist, checkRateExist, checkRateIsDecimal, 
checkSpeakerPerson,
async (req, res) => {
  const managers = await readManager(); 
  const { id } = req.params;
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const updatedManagers = managers.map((manager) => {
    if (manager.id === +id) {
      return { ...manager,
        name, 
        age,
        talk: {
          watchedAt,
          rate } }; 
} return manager;
  });
  fs.writeFile(path.resolve(__dirname, pathManager), JSON.stringify(updatedManagers));
  const updatedManager = updatedManagers.find((manager) => manager.id === +id);
      return res.status(200).json(updatedManager);
});

app.patch('/talker/rate/:id', checkAuthentication, 
checkRateExistFromBody, checkRateIsDecimalFromBody, async (req, res) => {
  const managers = await readManager(); 
  const { rate } = req.body;
  const { id } = req.params;
  const updatedManagers = managers.map((manager) => {
    if (manager.id === +id) {
      return { 
        ...manager,
        talk: {
          ...manager.talk,
          rate } }; 
} return manager;
});
  fs.writeFile(path.resolve(__dirname, pathManager), JSON.stringify(updatedManagers));
  return res.status(204).json({});
});

app.delete('/talker/:id', checkAuthentication, async (req, res) => {
  const managers = await readManager();
  const { id } = req.params;
  const deletePerson = managers.filter((person) => person.id !== +id);
  fs.writeFile(path.resolve(__dirname, pathManager), JSON.stringify(deletePerson));
  res.status(204).json(
    deletePerson,
  );
});

async function main() {
  try {
    await readManager();
  } catch (err) {
    console.error(err);
  }
}
main();
