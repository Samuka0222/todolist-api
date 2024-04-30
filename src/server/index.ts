import cors from 'cors';
import express from 'express';
import { accountsRouter } from './routes/accountsRoutes';
import { authRouter } from './routes/authRoutes';
import { tasksRouter } from './routes/tasksRoutes';

const origins = ['http://localhost:3000', 'http://localhost:3001'];

const corsOptions = {
  origin: origins,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json(), authRouter, accountsRouter, tasksRouter);

app.listen(3001, () => {
  console.log('Servidor escutando em http://localhost:3001');
});
