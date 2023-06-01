# Talker Manager 🚀

#### Construction of an application to register talkers (speakers) in which it will be possible to register, view, search, edit and delete information

  1. Develop a `CRUD` API (Create, Read, Update and Delete) of talkers and;
  2. Develop some endpoints that will read and write to a file using the `fs` module.



<details>
<summary> 🐳 Getting started with Docker</summary><br>

```bash
# in a terminal, start the containers
docker-compose up -d

# access the container terminal start the application
docker exec -it talker_manager bash
npm start
# ou para iniciar com live-reload
npm run dev

# in another terminal, run the tests
docker exec -it talker_manager bash
npm test 
```
</details>

## Requisitos

## Requisitos Obrigatórios

### 1 - Created the GET `/talker endpoint`

---

### 2 - Created the endpoint GET `/talker/:id`

---

### 3 - Created the endpoint POST `/login`

---

### 4 - Added validations for the `/login` endpoint

<details>
    
<summary>The validation rules </summary><br />
  

      - the `email` field is mandatory;;
      - the `email` field must have a valid email;
      - the `password` field is mandatory;
      - the `password` field must be at least 6 characters long.
      
  
  </details>

### 5 - Created the POST `/talker`

---

### 6 - Created the endpoint PUT `/talker/:id`

---

### 8 - Created the endpoint GET `/talker/search` and the query parameter `q=searchTerm``

---

### 9 - Created the endpoint GET `/talker/search` and the query parameter `rate=rateNumber`

---

### 10 - Created the endpoint GET `/talker/search` and the query parameter `date=watchedDate`

---

### 11 - Created the endpoint PATCH `/talker/rate/:id`

---

### 12 - Created the endpoint GET `/talker/db`

In this case, information from a MySQL database was used to return the list of speakers!

<details>
  <summary>About the MySQL database: </summary><br />

The `docker-compose.yaml` file has one more service called `db` with a MySQL instance configured to use port `3306`.

</details>

When created, the `db` service creates and populates the `talkers` table, which contains the same data as the `talker.json` file, in the following format:

| id | name                 | age | talk_watched_at | talk_rate |
|----|----------------------|-----|-----------------|-----------|
| 1  | Henrique Albuquerque | 62  | 23/10/2020      | 5         |
| 2  | Heloísa Albuquerque  | 67  | 23/10/2020      | 5         |
| 3  | Ricardo Xavier Filho | 33  | 23/10/2020      | 5         |
| 4  | Marcos Costa         | 24  | 23/10/2020      | 5         |

</details>
