# Blogs API

## Contexto
Este projeto trata-se de uma API RESTful capaz de receber requisições HTTP e devolver dados vindos de um banco MySQL mediado por uma ORM.

## Requisitos
#### para rodar localmente:
> Alterar o arquivo *.env.example* para *.env*
> Node.js v16.x

#### para rodar via Docker:
> Docker v20.x | Docker Compose v2.5.x

## Técnologias usadas

Back-end:
> Desenvolvido usando: JavaScript ES6 | Node.js | Express.js | Sequelize | MySQL

## Instalando Dependências
#### Via Docker:
> docker-compose up -d --build
> docker exec -it blogs_api bash
> npm install

#### Localmente:
> npm install

## Executando aplicação

#### Via Docker:
> docker exec -it blogs_api bash
> npm start

#### Localmente:
> npm start

## Executando os testes

#### Via Docker:
> docker exec -it blogs_api bash
> npm test

#### Localmente:
> npm test
