const crypto = require('crypto');
const fs = require('fs').promises;
const path = require('path');

const pathManager = './talker.json';

const readManager = async (customPath = pathManager) => {
  try {
    const read = await fs.readFile(path.resolve(__dirname, customPath), 'utf-8');
    return JSON.parse(read);
  } catch (err) {
    console.error(err);
  }
};

function generateToken() {
  const buffer = crypto.randomBytes(8);
  const senha = buffer.toString('hex');
  return senha;
}

function handleDataExist(req, res, next) {
  const { email, password } = req.body;
  const validadeData = !email ? 'O campo "email" é obrigatório' 
  : 'O campo "password" é obrigatório';
  if (email && password) {
    next();
  } else {
    return res.status(400).json({
      message: validadeData,
  });
}
}

function validateEmail(email) {
  const validade = /\S+@\S+\.\S+/;
  return validade.test(email);
}

function handleValidation(req, res, next) {
  const { email, password } = req.body;
  const passwordMax = 6;
  const correctPassword = password.length > passwordMax;
  const correctEmail = validateEmail(email);
  const validadeData = !correctEmail ? 'O "email" deve ter o formato "email@email.com"' 
  : 'O "password" deve ter pelo menos 6 caracteres';
  if (correctEmail && correctPassword) {
    next();
  } else {
    return res.status(400).json({
      message: validadeData,
    });
  }
}

const checkAuthentication = (req, res, next) => {
  const { authorization } = req.headers;
  const checkTypeString = typeof authorization === 'string';
  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  } if (authorization.length !== 16 || !checkTypeString) {
    return res.status(401).json({ message: 'Token inválido' });
  }
   return next();
};

const checkNameAndAGeExist = (req, res, next) => {
  const { name, age } = req.body;
  const validadeData = !name ? 'O campo "name" é obrigatório' : 'O campo "age" é obrigatório';
  if (name && age) {
   next();
  } else {
    res.status(400).json({
      message: validadeData,
  });
}
};

const checkNameValidade = (req, res, next) => {
  const { name } = req.body;
  const checkName = (name.length >= 3 && name !== undefined);
  if (!checkName) {
    res.status(400).json({
      message: 'O "name" deve ter pelo menos 3 caracteres',
    });
  } else {
    next();
  }
};

const checkAgeValidade = (req, res, next) => {
  const { age } = req.body;
  const ageNumber = Number(age);
  const isInteger = Number.isInteger(ageNumber);
  const checkThan18 = ageNumber >= 18;
  if (!isInteger || !checkThan18) {
    res.status(400).json({
      message: 'O campo "age" deve ser um número inteiro igual ou maior que 18',
    });
  } else {
    next();
  }
};

const checkTalkExist = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
    res.status(400).json({
      message: 'O campo "talk" é obrigatório',
    });
  } else {
    next();
  }
};

function isValidDate(dateString) {
  const date = /^(0[1-9]|[1-2]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  return date.test(dateString);
}

const checkWatchedAtExist = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const dateValidade = isValidDate(watchedAt);
  if (!watchedAt) {
    return res.status(400).json({
      message: 'O campo "watchedAt" é obrigatório',
    });
  } if (!dateValidade) {
    return res.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  } 
   return next();
};

const checkRateExist = (req, res, next) => {
  const { talk: { rate } } = req.body;
  if (!rate && rate !== 0) {
    res.status(400).json({
      message: 'O campo "rate" é obrigatório',
    });
  } else {
    next();
  }
};

const checkRateIsDecimal = (req, res, next) => {
  const { talk: { rate } } = req.body;
  const isRateInteger = Number.isInteger(rate);
  const isRateBetweenOneAndFive = (rate >= 1 && rate <= 5);
  if (!isRateInteger || !isRateBetweenOneAndFive) {
    res.status(400).json({
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
  } else {
    next();
  }
};

const checkRateExistFromBody = (req, res, next) => {
  const { rate } = req.body;
  if (!rate && rate !== 0) {
    res.status(400).json({
      message: 'O campo "rate" é obrigatório',
    });
  } else {
    next();
  }
};

const checkRateIsDecimalFromBody = (req, res, next) => {
  const { rate } = req.body;
  const isRateInteger = Number.isInteger(rate);
  const isRateBetweenOneAndFive = (rate >= 1 && rate <= 5);
  if (!isRateInteger || !isRateBetweenOneAndFive) {
    res.status(400).json({
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
  } else {
    next();
  }
};

const ckeckQfromQuery = async (req, res, next) => {
  const managers = await readManager('../talker.json');
  const { q, rate, date } = req.query;
  if ((!q || q.length === 0) && !rate && !date) {
    return res.status(200).json(managers);
} 
  next();
};

const checkRateFromQuery = (req, res, next) => {
  const { rate } = req.query;
  const rateNumber = Number(rate);
  const isRateInteger = Number.isInteger(rateNumber);
  const isRateBetweenOneAndFive = (rateNumber >= 1 && rateNumber <= 5);
  if ((!isRateInteger || !isRateBetweenOneAndFive) && rate) {
    res.status(400).json({
      message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
    });
  } else {
    next();
  }
};

const checkWatchedAtFromQuery = (req, res, next) => {
  const { date } = req.query;
  const dateValidade = isValidDate(date);
  if (!dateValidade && date) {
    return res.status(400).json({
      message: 'O parâmetro "date" deve ter o formato "dd/mm/aaaa"',
    });
  } 
    next();
};

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
module.exports = {
  readManager,
  generateToken,
  handleDataExist,
  handleValidation,
  checkAuthentication,
  checkNameAndAGeExist,
  checkNameValidade,
  checkAgeValidade, 
  checkTalkExist,
  checkWatchedAtExist,
  checkRateExist,
  checkRateIsDecimal,
  checkRateExistFromBody,
  checkRateIsDecimalFromBody,
  checkRateFromQuery,
  ckeckQfromQuery,
  checkWatchedAtFromQuery,
  checkSpeakerPerson,
};
