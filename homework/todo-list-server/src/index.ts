import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import * as jwt from 'jsonwebtoken';

import { Todo } from './todo';
import { CreateUser, hashPswd, validatePassword } from './users';

declare module 'jsonwebtoken' {
  export interface JwtPayload {
    userId: string;
  }
}

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

import mysql from 'mysql2/promise';

dotenv.config();
import { DBOptions } from './db.conf';

const app: Express = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

CreateUser('XXX2', 'password1234')
  .then((result) => console.log('DONE'))
  .catch((err) => console.log(err));

validatePassword('XXX2', 'password1234').then((result) => console.log(result));

validatePassword('XXX2', 'invalid-password').then((result) => console.log(result));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/api/todos', async (req: Request, res: Response) => {
  const dbConn = await mysql.createConnection(DBOptions as any);

  const [results] = await dbConn.query('SELECT id, name, completed FROM todos');
  dbConn.end();

  console.log(results);
  res.send(results);
});

app.get('/api/todos-auth', authenticateToken, async (req: Request, res: Response) => {
  const dbConn = await mysql.createConnection(DBOptions as any);

  const [results] = await dbConn.query('SELECT id, name, completed FROM todos');
  dbConn.end();

  console.log(results);
  res.send(results);
});

app.get('/api/todos/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  const dbConn = await mysql.createConnection(DBOptions as any);
  const [results] = await dbConn.query('SELECT id, name, completed FROM todos WHERE id = ?', [id]);
  dbConn.end();

  res.send(results);
});

app.post('/api/todos', async (req: Request, res: Response) => {
  let todo: Todo = req.body;

  const dbConn = await mysql.createConnection(DBOptions as any);

  const [results] = await dbConn.query(
    'INSERT INTO todos SET id = (SELECT MAX(id)+1 FROM todos as t1), name = ?, completed = ?',
    [todo.name, todo.completed]
  );
  dbConn.end();

  res.send(results);
});

app.put('/api/todos/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const todo = req.body;

  const dbConn = await mysql.createConnection(DBOptions as any);
  const [results] = await dbConn.query('UPDATE todos set name = ?, completed = ? WHERE id = ?', [
    todo.name,
    todo.completed,
    todo.id,
  ]);
  dbConn.end();

  res.send(results);
});

app.delete('/api/todos/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  const dbConn = await mysql.createConnection(DBOptions as any);
  const [result] = await dbConn.query('DELETE FROM todos WHERE id = ?', [id]);
  dbConn.end();

  res.send(result);
});

app.post('/api/login', async (req: Request, res: Response) => {
  const username = req.body.username;

  const valid = await validatePassword(username, req.body.password);
  if (valid) {
    const token = genAccessToken(username);
    res.json({ token });
    return;
  }
  res.sendStatus(401);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

function genAccessToken(username: string) {
  return jwt.sign({ userId: username }, process.env.TOKEN_SECRET as jwt.Secret, {
    expiresIn: '2 days',
  });
}

function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, userId: any) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    req.userId = userId;
    next();
  });
}
