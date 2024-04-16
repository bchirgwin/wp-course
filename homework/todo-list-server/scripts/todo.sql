DROP DATABASE IF EXISTS todo;

CREATE DATABASE todo;

use todo;

CREATE TABLE todos (
  id int NOT NULL,
  name varchar(100),
  completed boolean,
  CONSTRAINT PK_Quiz PRIMARY KEY (`id`)
);

INSERT INTO todos (id, name, completed)
VALUES 
 (1, 'This data is coming from MySql', TRUE),
 (2, 'Take out trash', FALSE),
 (3, 'Take out recycling', FALSE);

