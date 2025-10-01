import express, { Express, Request, Response } from 'express';

const app: Express = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_: Request, res: Response) => {
  res.send({ status: 'ok' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
