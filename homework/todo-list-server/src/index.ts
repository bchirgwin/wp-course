import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import * as jwt from 'jsonwebtoken';

import { Todo } from './todo';
import Todos from './mock-todos.json';

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

let todos: Todo[] = Todos;

const app: Express = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/api/todos', async (req: Request, res: Response) => {
  const dbConn = await mysql.createConnection(DBOptions as any);

  const [results, fields] = await dbConn.query('SELECT id, name, completed FROM todos');

  console.log(results);
  res.send(results);
});

app.get('/api/todos-auth', authenticateToken, (req: Request, res: Response) => {
  res.send(todos);
});

app.get('/api/todos/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  const dbConn = await mysql.createConnection(DBOptions as any);
  const [results, fields] = await dbConn.query('SELECT id, name, completed FROM todos WHERE id = ?', [id]);

  res.send(results);
});

app.post('/api/todos', async (req: Request, res: Response) => {
  let todo: Todo = req.body;

  const dbConn = await mysql.createConnection(DBOptions as any);

  const [results, fields] = await dbConn.query(
    'INSERT INTO todos SET id = (SELECT MAX(id)+1 FROM todos as t1), name = ?, completed = ?',
    [todo.name, todo.completed]
  );

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

  res.send(results);
});

app.delete('/api/todos/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  const dbConn = await mysql.createConnection(DBOptions as any);
  const [result] = await dbConn.query('DELETE FROM todos WHERE id = ?', [id]);

  // todos = todos.filter((todo: Todo) => todo.id != id);
  res.send(todos);
});

app.post('/api/login', (req: Request, res: Response) => {
  const username = req.body.username;

  const token = genAccessToken(username);
  res.json(token);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

async function dbConnect(): Promise<mysql.Connection> {
  const dbConn = await mysql.createConnection(DBOptions as any);

  await dbConn
    .connect()
    .then(() => console.log('connected'))
    .catch((err: Error) => console.log(err));

  try {
    const [results, fields] = await dbConn.query('SELECT * FROM todos');
    console.log(results);
    console.log(fields);
    return dbConn;
  } catch (err) {
    return Promise.reject(null);
    console.log(err);
  }
}

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
