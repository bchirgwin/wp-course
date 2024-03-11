import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { people } from './people';

dotenv.config();

const app: Express = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/api/helloworld', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.get('/api/people/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const person = people[id];

  res.send(person);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
