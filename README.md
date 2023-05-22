# Boas-vindas ao repositório do projeto Talker Manager

Para realizar o projeto, atente-se a cada passo descrito a seguir, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv&nbsp;🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

<details>
<summary>📃 Termos e acordos</summary><br>

Ao iniciar este projeto, você concorda com as diretrizes do [Código de Conduta](https://app.betrybe.com/learn/student-manual/codigo-de-conduta-da-pessoa-estudante) e do [Manual da Pessoa Estudante](https://app.betrybe.com/learn/student-manual) da Trybe.

</details>

## Entregáveis

<details>
  <summary>🤷🏽‍♀️ Como entregar</summary><br />

  Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/35e03d5e-6341-4a8c-84d1-b4308b2887ef/lesson/573db55d-f451-455d-bdb5-66545668f436) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary>👨‍💻 O que deverá ser desenvolvido</summary><br />

  Você irá construir uma aplicação de cadastro de talkers (palestrantes) em que será possível cadastrar, visualizar, pesquisar, editar e excluir informações. Para isso você deverá:

  1. Desenvolver uma API de um `CRUD` (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes (talkers) e;
  2. Desenvolver alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo `fs`.

</details>

<details>
  <summary>🗓 Data de Entrega</summary><br />
  
  - Este projeto é individual
  - Serão `2` dias de projeto
  - Data de entrega para avaliação regular do projeto: `25/05/2023 14:00`

</details>

## Orientações

<details>
<summary> 🐳 Início rápido com Docker</summary><br>

> 💡 Dica: Mais detalhes sobre os comandos acima estão na seção [Node e NPM](FAQ.md#node-e-npm) do [arquivo de dúvidas frequentes (FAQ)](FAQ.md).

```bash
# em um terminal, inicie os containers
docker-compose up -d

# acesse o terminal do container inicie a aplicação
docker exec -it talker_manager bash
npm start
# ou para iniciar com live-reload
npm run dev

# em outro terminal, rode os testes
docker exec -it talker_manager bash
npm run lint # roda a verificação do linter
npm test # roda todos os testes
npm test 01 # rodando apenas o teste do requisito 01
```

</details>

<details>
<summary>🖥️ Início rápido sem Docker</summary><br>

> ⚠️ **Atenção**: O avaliador espera que a versão do `node` utilizada seja a 16.
>
> Crie um arquivo `.env` na raiz do projeto seguindo o padrão do arquivo [`env.example`](./env.example) e o modifique de acordo com a necessidade.
>
> 💡 Dica: Mais detalhes sobre os comandos abaixo estão na seção [Node e NPM](FAQ.md#node-e-npm) do [arquivo de dúvidas frequentes (FAQ)](FAQ.md).

```bash
# em um terminal, inicie a aplicação no container
npm install
env $(cat .env) npm start
# ou para iniciar com live-reload
env $(cat .env) npm run dev

# em outro terminal, rode os testes
npm run lint # roda a verificação do linter
env $(cat .env) npm test # roda todos os testes
env $(cat .env) npm test 01 # rodando apenas o teste do requisito 01
```

</details>

### 🐞 Bugs no código? Já tentou usar o Debugger? Veja a seção sobre [Depuração](./FAQ.md#debugging) na FAQ para saber como! 🐞

### 💡 Dica: Qualquer dúvida, dê uma olhada na [FAQ](./FAQ.md) ou procure a monitoria. Bom&nbsp;projeto!&nbsp;🚀

### **🗣 Nos dê feedbacks sobre o projeto**

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário.
**Leva menos de 3 minutos!**

[FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH#cohort_hidden=CH28-A&template=betrybe/sd-0x-project-talker-manager)

## Requisitos

### Antes de iniciar o projeto

<details>
  <summary><strong>⚠️ Informações importantes ⚠️</strong></summary><br />

1. Com exceção do requisito 3, todos os outros requisitos deverão ser feitos utilizando o módulo `fs`.

2. O arquivo `src/talker.json` será utilizado como base para fazer as requisições da API. As operações de leitura e escrita dos requisitos devem ser feitas nesse arquivo usando os métodos da biblioteca `fs`.

3. Há um arquivo `src/index.js` no repositório. Não remova, nele, o seguinte trecho de código:
  
    ```javascript
    app.get('/', (_request, response) => {
      response.status(HTTP_OK_STATUS).send();
    });
    ```

    Isso está configurado para o avaliador funcionar. 😅

4. Você pode usar o comando `npm run restore` para restaurar o arquivo `src/talker.json` para seu estado inicial.

5. Ao se deparar com o erro de que a porta já está em uso: `EADDRINUSE: address already in use 0.0.0.0:3001`, execute em seu terminal `killall -9 node` isso finalizá todas as execuções do node.

</details>

## Requisitos Obrigatórios

### 1 - Crie o endpoint GET `/talker`

<details>
  <summary>A requisição deve retornar o <code>status 200</code> e um array com todas as pessoas palestrantes cadastradas. Exemplo: </summary><br />

```json
[
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Heloísa Albuquerque",
    "age": 67,
    "id": 2,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Ricardo Xavier Filho",
    "age": 33,
    "id": 3,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Marcos Costa",
    "age": 24,
    "id": 4,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  }
]
```
  
</details>

<details>
  <summary>Caso não exista nenhuma pessoa palestrante cadastrada a requisição deve retornar o <code>status 200</code> e um array vazio. Exemplo:</summary><br />

  ```json
  []
  ```

</details>

---

### 2 - Crie o endpoint GET `/talker/:id`

<details>
  <summary>A requisição deve retornar o <code>status 200</code> e uma pessoa palestrante com base no <code>id</code> da rota. Por exemplo, ao fazer uma requisição <code>/talker/1</code>, a resposta deve ser:</summary><br />

  ```json
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  }
  ```

</details>

<details>
  <summary>Caso não seja encontrada uma pessoa palestrante com base no <code>id</code> da rota, a requisição deve retornar o <code>status 404</code> com o seguinte corpo:</summary><br />
  
  ```json
  {
    "message": "Pessoa palestrante não encontrada"
  }
  ```

</details>

---

### 3 - Crie o endpoint POST `/login`

O endpoint deverá receber no corpo da requisição os campos `email` e `password` e retornar um token aleatório de 16 caracteres. Este token será utilizado pelas requisições dos próximos requisitos do projeto.

> Nota: O foco desse requisito é retornar um token válido, não sendo necessário implementar regras de negócio e validação neste momento.

<details>
  <summary>O corpo da requisição deverá ter seguinte formato:</summary><br />

  ```json
  {
    "email": "email@email.com",
    "password": "123456"
  }
  ```

</details>
  
<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />
  
- O endpoint deverá retornar um código de `status 200` com o token gerado e o seguinte corpo:

  ```json
  {
    "token": "7mqaVRXJSp886CGr"
  }
  ```

- O endpoint deve retornar um token aleatório a cada vez que for acessado.
  
</details>

---

### 4 - Adicione as validações para o endpoint `/login`

Os campos recebidos pela requisição devem ser validados e, caso os valores sejam inválidos, o endpoint deve retornar o código de `status 400` com a respectiva mensagem de erro ao invés do token.

> Dica: As lições sobre **Middlewares** e **Router Middleware** do Express na seção de Introdução ao Node podem te ajudar!
<details>
  <summary>As regras de validação são:</summary><br />

- o campo `email` é obrigatório;
- o campo `email` deve ter um email válido;
- o campo `password` é obrigatório;
- o campo `password` deve ter pelo menos 6 caracteres.

</details>
  
<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

- Caso o campo `email` não seja passado ou esteja vazio, retorne um código de `status 400` com o seguinte corpo:

  ```json
  {
    "message": "O campo \"email\" é obrigatório"
  }
  ```

- Caso o email passado não seja válido, retorne um código de `status 400` com o seguinte corpo:

  ```json
  {
    "message": "O \"email\" deve ter o formato \"email@email.com\""
  }
  ```

- Caso o campo `password` não seja passado ou esteja vazio retorne um código de `status 400` com o seguinte corpo:

  ```json
  {
    "message": "O campo \"password\" é obrigatório"
  }
  ```

- Caso a senha não tenha pelo menos 6 caracteres retorne um código de `status 400` com o seguinte corpo:

  ```json
  {
    "message": "O \"password\" deve ter pelo menos 6 caracteres"
  }
  ```

</details>

---

### 5 - Crie o endpoint POST `/talker`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

- O endpoint deve ser capaz de adicionar uma nova pessoa palestrante ao seu arquivo;

- O corpo da requisição deverá ter o seguinte formato:

  ```json
  {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:
  
  - Dica 💡: Um token **válido** é composto por exatamente **16 caracteres** e deve ser do tipo **string**.

    ```json
    {
      "message": "Token inválido"
    }
    ```

- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"name\" é obrigatório"
    }
    ```

  - Caso o nome não tenha pelo menos 3 caracteres retorne um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O \"name\" deve ter pelo menos 3 caracteres"
    }
    ```

- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastradas. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"age\" é obrigatório"
    }
    ```

  - Caso o campo não seja um `number` do tipo inteiro igual ou maior que 18 retorne um código de `status 400`, com o seguinte corpo:

  ```json
  {
    "message": "O campo \"age\" deve ser um número inteiro igual ou maior que 18"
  }
  ```

  - O campo `talk` deverá ser um objeto com as chaves `watchedAt` e `rate`:

  - O campo `talk` é obrigatório.

    - Caso o campo não seja informado retorne `status 400`, com o seguinte corpo:

        ```json
        {
          "message": "O campo \"talk\" é obrigatório"
        }
        ```

  - A chave `watchedAt` é obrigatória.  

    - Caso a chave não seja informada ou esteja vazia retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"watchedAt\" é obrigatório"
      }
      ```

  - A chave `watchedAt` deve ser uma data no formato `dd/mm/aaaa`.

    - Caso a data não respeite o formato `dd/mm/aaaa` retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\""
      }
      ```

  - O campo `rate` é obrigatório.  

    - Caso o campo não seja informado ou esteja vazio retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"rate\" é obrigatório"
      }
      ```

  - A chave `rate` deve ser um inteiro entre 1 e 5.

    - Caso a nota não seja um inteiro entre 1 e 5 retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"rate\" deve ser um número inteiro entre 1 e 5"
      }
      ```  
  
- Caso esteja tudo certo, retorne o `status 201`  e a pessoa cadastrada.
  
- O endpoint deve retornar o `status 201` e a pessoa palestrante que foi cadastrada, da seguinte forma:

  ```json
  {
    "id": 1,
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

</details>

---

### 6 - Crie o endpoint PUT `/talker/:id`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

- O endpoint deve ser capaz de editar uma pessoa palestrante com base no id da rota, sem alterar o id registrado.

- O corpo da requisição deverá ter o seguinte formato:

    ```json
    {
      "name": "Danielle Santos",
      "age": 56,
      "talk": {
        "watchedAt": "22/10/2019",
        "rate": 5
      }
    }
    ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token não encontrado"
      }
      ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token inválido"
      }
      ```

- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"name\" é obrigatório"
      }
      ```

  - Caso o nome não tenha pelo menos 3 caracteres retorne um código de `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O \"name\" ter pelo menos 3 caracteres"
      }
      ```

- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastradas. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"age\" é obrigatório"
      }
      ```

  - Caso o campo não seja um `number` do tipo inteiro igual ou maior que 18 retorne um código de `status 400`, com o seguinte corpo:

  ```json
  {
    "message": "O campo \"age\" deve ser um número inteiro igual ou maior que 18"
  }
  ```

- O campo `talk` deverá ser um objeto com as chaves `watchedAt` e `rate`:

  - O campo `talk` é obrigatório.

    - Caso o campo não seja informado retorne `status 400`, com o seguinte corpo:

        ```json
        {
          "message": "O campo \"talk\" é obrigatório"
        }
        ```

  - A chave `watchedAt` é obrigatória.  

    - Caso a chave não seja informada ou esteja vazia retorne `status 400`, com o seguinte corpo:

        ```json
        {
          "message": "O campo \"watchedAt\" é obrigatório"
        }
        ```

  - A chave `watchedAt` deve ser uma data no formato `dd/mm/aaaa`.

    - Caso a data não respeite o formato `dd/mm/aaaa` retorne `status 400`, com o seguinte corpo:

        ```json
        {
          "message": "O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\""
        }
        ```

  - O campo `rate` é obrigatório.  

    - Caso o campo não seja informado ou esteja vazio retorne `status 400`, com o seguinte corpo:

        ```json
        {
          "message": "O campo \"rate\" é obrigatório"
        }
        ```

  - A chave `rate` deve ser um inteiro entre 1 e 5.

    - Caso a nota não seja um inteiro entre 1 e 5 retorne `status 400`, com o seguinte corpo:

        ```json
        {
          "message": "O campo \"rate\" deve ser um número inteiro entre 1 e 5"
        }
        ```

- Caso não seja encontrada uma pessoa palestrante com base no `id` da rota, a requisição deve retornar o `status 404` com o seguinte corpo:
  
  ```json
  {
    "message": "Pessoa palestrante não encontrada"
  }
  ```

- Caso esteja tudo certo, retorne o `status 200` e a pessoa editada.
  - O endpoint deve retornar o `status 200` e a pessoa palestrante que foi editada, da seguinte forma:

      ```json
      {
        "id": 1,
        "name": "Danielle Santos",
        "age": 56,
        "talk": {
          "watchedAt": "22/10/2019",
          "rate": 4
        }
      }
      ```

  - Os dados atualizados por meio do endpoint deve ser persistidos no arquivo `talker.json`.

</details>

---

### 7 - Crie o endpoint DELETE `/talker/:id`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token não encontrado"
      }
      ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token inválido"
      }
      ```

- O endpoint deve deletar uma pessoa palestrante com base no id da rota. Devendo retornar o `status 204`, sem conteúdo na resposta.

</details>

---

### 8 - Crie o endpoint GET `/talker/search` e o parâmetro de consulta `q=searchTerm`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

- O endpoint deve retornar um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam `q` da URL. Devendo retornar o `status 200`, com o seguinte corpo:

    ```text
    /talker/search?q=Da
    ```

    ```json
    [
      {
        "id": 1,
        "name": "Danielle Santos",
        "age": 56,
        "talk": {
          "watchedAt": "22/10/2019",
          "rate": 5,
        },
      }
    ]
    ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token não encontrado"
      }
      ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token inválido"
      }
      ```

- Caso `searchTerm` não seja informado ou esteja vazio, o endpoint deverá retornar um array com todas as pessoas palestrantes cadastradas, assim como no endpoint GET `/talker`, com um `status 200`.

- Caso nenhuma pessoa palestrante satisfaça a busca, o endpoint deve retornar o `status 200` e um array vazio.

  **Dica** é importante ter atenção se essa rota não entra em conflito com as outras, já que a ordem das rotas faz diferença na interpretação da aplicação

</details>

---

## Requisitos Bônus

### 9 - Crie no endpoint GET `/talker/search` o parâmetro de consulta `rate=rateNumber`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

- O endpoint deve retornar um array de palestrantes cujo `rate` seja um valor igual ao termo pesquisado no queryParam `rate` da URL. Devendo retornar o `status 200`, com o seguinte corpo:

    ```text
    /talker/search?rate=5
    ```

    ```json
    [
      {
        "id": 1,
        "name": "Danielle Santos",
        "age": 56,
        "talk": {
          "watchedAt": "22/10/2019",
          "rate": 5,
        },
      }
    ]
    ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token não encontrado"
      }
      ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token inválido"
      }
      ```

- Caso o termo pesquisado no queryParam `rate` não seja um número inteiro entre 1 e 5 retorne um código de `status 400` com o seguinte corpo:

  ```json
  {
    "message": "O campo \"rate\" deve ser um número inteiro entre 1 e 5"
  }
  ```

- Caso o parâmetro de consulta `searchTerm` também esteja presente, ambas as filtragens devem ser aplicadas, ou seja, o endpoint deve retornar um array de palestrantes cujo `rate` seja um valor igual ao termo pesquisado no queryParam `rate`, e também que o nome contenha o termo pesquisado no queryParam `q` da URL. Devendo retornar o `status 200`, com o seguinte corpo:

    ```text
    /search?rate=5&q=Da
    ```

    ```json
    [
      {
        "id": 1,
        "name": "Danielle Santos",
        "age": 56,
        "talk": {
          "watchedAt": "22/10/2019",
          "rate": 5,
        },
      }
    ]
    ```

</details>

<details>
  <summary>Dicas:</summary><br />
  
- Lembre-se que os valores que vem na requisição via _queryParams_ são sempre do tipo _string_;
- A chave `params` do objeto `Request` possui todos os parâmetros de consulta enviados na requisição, você consegue acessar esses valores como já faz para a chave `body`;
- Se estiver com dúvida na lógica de filtrar os resultados, relembre o conteúdo de `Higher Order Functions` dos fundamentos de JS.

</details>

---

### 10 - Crie no endpoint GET `/talker/search` o parâmetro de consulta `date=watchedDate`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

- O endpoint deve retornar um array de palestrantes cujo `watchedAt` seja um valor igual ao termo pesquisado no queryParam `date` da URL. Devendo retornar o `status 200`, com o seguinte corpo:

    ```text
    /talker/search?date=22/10/2019
    ```

    ```json
    [
      {
        "id": 1,
        "name": "Danielle Santos",
        "age": 56,
        "talk": {
          "watchedAt": "22/10/2019",
          "rate": 5,
        },
      }
    ]
    ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token não encontrado"
      }
      ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token inválido"
      }
      ```

- Caso o termo pesquisado no queryParam `date` não respeite o formato `dd/mm/aaaa` retorne um código de `status 400` com o seguinte corpo:

  ```json
  {
    "message": "O parâmetro \"date\" deve ter o formato \"dd/mm/aaaa\""
  }
  ```

- Caso `date` esteja vazio, o endpoint deverá retornar um array com todas as pessoas palestrantes cadastradas, assim como no endpoint GET `/talker`, com um `status 200`.

- Assim como no requisito anterior, deve ser possível combinar o parâmetro de consulta `date` com os outros parâmetros já existentes: `q` e `rate`.

</details>

---

### 11 - Crie o endpoint PATCH `/talker/rate/:id`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

- O endpoint deve ser capaz de alterar a avaliação de uma pessoa palestrante com base no id da rota, sem alterar o id registrado.

- O corpo da requisição deverá ter o seguinte formato:

    ```json
    {
      "rate": 5
    }
    ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token não encontrado"
      }
      ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

      ```json
      {
        "message": "Token inválido"
      }
      ```

- O campo `rate` é obrigatório.  

  - Caso o campo não seja informado ou esteja vazio retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"rate\" é obrigatório"
      }
      ```

- A chave `rate` deve ser um inteiro entre 1 e 5.

  - Caso a nota não seja um inteiro entre 1 e 5 retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"rate\" deve ser um número inteiro entre 1 e 5"
      }
      ```

- Caso esteja tudo certo, retorne o `status 204` sem nenhum corpo.

  - Os dados atualizados por meio do endpoint deve ser persistidos no arquivo `talker.json`.

</details>

---

### 12 - Crie o endpoint GET `/talker/db`

Neste requisito vamos criar um endpoint similar ao do requisito 1, mas usando as informações de um banco de dados MySQL para retornar a lista de pessoas palestrantes!

<details>
  <summary>Sobre o banco de dados MySQL: </summary><br />

O arquivo `docker-compose.yaml` tem mais um serviço chamado `db` com uma instância MySQL configurada para uso na porta `3306`.

- **Caso o serviço não esteja iniciado, rode o comando `docker-compose up -d db`**

<details><summary>⚠️ Caso você esteja rodando os testes fora do container, configure as variáveis de ambiente no arquivo <code>.env</code> </summary><br>

- Crie um arquivo `.env` na raiz do projeto seguindo o padrão do arquivo [`env.example`](./env.example) e o modifique de acordo com a necessidade.

> Nota: o arquivo `env.example` já contém os valores necessários para se conectar com o serviço `db` do compose.

</details>

Ao ser criado, o serviço `db` cria e popula a tabela `talkers`, que contém os mesmos dados do arquivo `talker.json`, no seguinte formato:

| id | name                 | age | talk_watched_at | talk_rate |
|----|----------------------|-----|-----------------|-----------|
| 1  | Henrique Albuquerque | 62  | 23/10/2020      | 5         |
| 2  | Heloísa Albuquerque  | 67  | 23/10/2020      | 5         |
| 3  | Ricardo Xavier Filho | 33  | 23/10/2020      | 5         |
| 4  | Marcos Costa         | 24  | 23/10/2020      | 5         |

</details>

<details>
  <summary>Na aplicação, crie uma conexão com o banco e a utilize para recuperar a lista de palestrantes da DB: </summary><br />
  
  A biblioteca `mysql2` já vem instalada no projeto.

  💡**Dica** Reveja as lições a partir de [Configurando o MySQL no Express](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/2ed87e4f-9049-4314-8091-8f71b1925cf6/day/6b700197-22c6-4a2d-b791-b66d5247d3f0/lesson/d55e780a-a5a4-44a4-8d83-d73a2c99c691) em caso de dúvidas.

</details>

<details>
  <summary>Crie o endpoint GET <code>/talker/db</code> retornando a lista recuperada da DB, mas seguindo o mesmo formato abaixo: </summary><br />

  💡**Dica** O formato salvo no banco não está exatamente igual ao esperado no endpoint. Será necessário transformar o resultado para o formato correto antes de retornar para o cliente.
</details>

<details>
  <summary>A requisição deve retornar o <code>status 200</code> e um array com todas as pessoas palestrantes cadastradas. Exemplo: </summary><br />

```json
[
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Heloísa Albuquerque",
    "age": 67,
    "id": 2,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Ricardo Xavier Filho",
    "age": 33,
    "id": 3,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Marcos Costa",
    "age": 24,
    "id": 4,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  }
]
```
  
</details>

<details>
  <summary>Caso não exista nenhuma pessoa palestrante cadastrada a requisição deve retornar o <code>status 200</code> e um array vazio. Exemplo:</summary><br />

  ```json
  []
  ```

</details>

<details>
  <summary>Será testado que caso o <strong>banco de dados</strong> sofra alterações, a requisição deve retornar o <code>status 200</code> e um array com os dados atualizados do banco de dados. Exemplo:</summary><br />

  > Nota: O teste fará o cadastro **diretamente no banco**, não utilizando nenhum endpoint da API.

  ```json
  [
    {
      "name": "Henrique Albuquerque",
      "age": 62,
      "id": 1,
      "talk": {
        "watchedAt": "23/10/2020",
        "rate": 5
      }
    },
    {
      "name": "Heloísa Albuquerque",
      "age": 67,
      "id": 2,
      "talk": {
        "watchedAt": "23/10/2020",
        "rate": 5
      }
    },
    {
      "name": "Ricardo Xavier Filho",
      "age": 33,
      "id": 3,
      "talk": {
        "watchedAt": "23/10/2020",
        "rate": 5
      }
    },
    {
      "name": "Marcos Costa",
      "age": 24,
      "id": 4,
      "talk": {
        "watchedAt": "23/10/2020",
        "rate": 5
      }
    },
    {
      "name": "Zendaya Maree",
      "age": 17,
      "id": 5,
      "talk": {
        "watchedAt": "25/09/2020",
        "rate": 5
      }
    }
  ]
  ```

</details>
