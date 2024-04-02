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

let todos: Todo[] = Todos;

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/api/todos', (req: Request, res: Response) => {
  res.send(todos);
});

app.get('/api/todos-auth', authenticateToken, (req: Request, res: Response) => {
  res.send(todos);
});

app.get('/api/todos/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  const todo: Todo = todos.find((todo) => todo.id === id)!;

  res.send(todo);
});

app.post('/api/todos', (req: Request, res: Response) => {
  let todo: Todo = req.body;
  const nextId = todos.reduce((id, t) => (t.id >= id ? t.id + 1 : id), 1);

  todo.id = nextId;

  todos.push(todo);

  res.send(todo);
});

app.put('/api/todos/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const todo = req.body;
  todos = todos.filter((todo: Todo) => todo.id != id);
  todo.id = id;
  todos = [...todos, req.body];
  res.send(todos);
});

app.delete('/api/todos/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  todos = todos.filter((todo: Todo) => todo.id != id);
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
