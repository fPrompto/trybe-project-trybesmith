# Boas vindas ao repositório do projeto Trybesmith!

O objetivo desse projeto Back-end, se dava em desenvolver todas as camadas da aplicação (Models, Service e Controllers) em seu código e, por meio dessa aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou CRUD, para as pessoas mais íntimas 😜).

## Stacks do Projeto

- TypeScript

- Node.js

- Express.js

- MySQL


## As principais tarefas do projeto foram:

- Declarar variáveis e funções com tipagens Typescript;

- Construir uma _API Node Express_ utilizando o Typescript;

- Desenvolver um CRUD (Create, Read, Update e Delete) de itens medievais, no formato de uma API, utilizando Typescript;

- Criar alguns endpoints que irão ler e escrever em um banco de dados, utilizando o MySQL;

- Endpoints no padrão REST.


<!--
## Conexão com o Banco

A conexão do banco local deverá conter os seguintes parâmetros:

```typescript
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

export default connection;
```

**:warning: É essencial configurar essas 3 variáveis de ambiente para testar o projeto localmente: :warning:**

```
  host: process.env.MYSQL_HOST
  user: process.env.MYSQL_USER
  password: process.env.MYSQL_PASSWORD
```

**:warning: É essencial que seu arquivo tenha o nome de `connection.ts` e esteja no diretório `src/models` :warning:**

## Tabelas

O banco terá três tabelas: pessoas usuárias, produtos e pedidos.

```sql
DROP SCHEMA IF EXISTS Trybesmith;
CREATE SCHEMA Trybesmith;

CREATE TABLE Trybesmith.Users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  classe TEXT NOT NULL,
  level INTEGER NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE Trybesmith.Orders (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  userId INTEGER,
  FOREIGN KEY (userId) REFERENCES Trybesmith.Users (id)
);

CREATE TABLE Trybesmith.Products (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  amount TEXT NOT NULL,
  orderId INTEGER,
  FOREIGN KEY (orderId) REFERENCES Trybesmith.Orders (id)
);
```

---
-->
