import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import { questions } from './question';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/question', (req: Request, res: Response) => {
  const questionType = req.query.type;

  const q = questions.filter((q) => q.type === questionType);

  res.send(q);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
