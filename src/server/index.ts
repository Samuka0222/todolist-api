import express from 'express';
import { makeSignInController } from '../factories/auth/makeSignInController';
import { makeSignUpController } from '../factories/auth/makeSignUpController';
import { makeAuthenticationMiddleware } from '../factories/middlewares/makeAuthenticationMiddleware';
import { makeCreateTaskController } from '../factories/tasks/makeCreateTaskController';
import { makeDeleteAccountController } from '../factories/users/makeDeleteAccountController';
import { middlewareAdapter } from './adapters/middlewareAdapter';
import { routeAdapter } from './adapters/routeAdapter';

const app = express();
app.use(express.json());

// Sign in and Sign Up
app.post('/sign-up', routeAdapter(makeSignUpController()));
app.post('/sign-in', routeAdapter(makeSignInController()));

// Account CRUD
app.delete(
  '/accounts/:accountId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeDeleteAccountController()),
);

// Tasks CRUD
app.post(
  '/tasks',
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeCreateTaskController()),
);

app.listen(3001, () => {
  console.log('Servidor escutando em http://localhost:3001');
});
