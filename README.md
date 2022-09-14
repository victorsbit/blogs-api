# Blogs API

### Contexto
Essa aplicação Back-end simula o comportamento de Blog. Trata-se de uma API RESTful alimentada por um banco MySQL, cuja conexão é mediada pelo ORM Sequelize.



### Requisitos
Para rodar localmente:
```
Altere o arquivo *.env.example* para *.env*
Node.js v16.x
```
Para rodar via Docker:
```
Docker v20.x
Docker Compose v2.5.x
```


### Técnologias usadas
Back-end desenvolvido com as tecnologias:
> JavaScript ES6 | Node.js | Express.js | Sequelize | MySQL


### Instalando Dependências
Via Docker:
```
docker-compose up -d --build
docker exec -it blogs_api bash
npm install
```
Localmente:
```
npm install
```


### Executando aplicação
Via Docker:
```
docker exec -it blogs_api bash
npm start
```
Localmente:
```
npm start
```


### Executando os testes

Via Docker:
```
docker exec -it blogs_api bash
npm test
```
Localmente:
```
npm test
```
