DROP DATABASE IF EXISTS quiz;

CREATE DATABASE quiz;

use quiz;

CREATE TABLE quizzes (
  id int NOT NULL,
  name varchar(30),
  CONSTRAINT PK_Quiz PRIMARY KEY (`id`)
);

CREATE TABLE questions (
  id int NOT NULL,
  question_text varchar(300),
  type varchar(10),
  quizId int not null,
  CONSTRAINT PK_Question PRIMARY KEY (`id`),
  CONSTRAINT FK_Quiz FOREIGN KEY (`quizId`) REFERENCES `quizzes` (`id`)
);

CREATE TABLE answers (
  id int NOT NULL,
  answer_text varchar(300),
  correct boolean,
  questionId int NOT NULL, 
  CONSTRAINT PK_Answer PRIMARY KEY (`id`), 
  CONSTRAINT FK_Question FOREIGN KEY (`questionId`) REFERENCES `questions` (`id`)
);

INSERT INTO quizzes (`id`, `name`)
VALUES 
(1, 'JavaScript'),
(2, 'TypeScript'),
(3, 'CSS');

INSERT INTO questions (`quizId`, `id`, `question_text`, `type`) 
VALUES 
( 1, 1, 'Does a variable have a type that cannot be changed', 'True/False');


INSERT INTO answers (id, answer_text, correct, questionId)
VALUES (1, 'true', TRUE, 1),
 (2, 'false', FALSE, 1);

