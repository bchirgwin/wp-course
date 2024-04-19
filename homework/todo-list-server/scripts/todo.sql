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

CREATE TABLE users (
  id int not null, 
  username varchar(30) not null,
  pswd varchar(255) not null
);

INSERT INTO `users` (`id`, `username`, `pswd`) 
VALUES ( 1, 'bchirgwin', '$2a$10$anpXHsiGYCvR7i1hI7RsQOmX63T5rGN.nKp3ts5BsXqqJP.JVcWky'),
( 2, 'admin', '$2a$10$rLQxCJmyK3MK6TFgNA4S9u.seHX/wQS3/kQNznUloI4Ski8QsWRyO');

