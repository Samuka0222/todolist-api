import express from 'express';
import { makeSignInController } from '../factories/auth/makeSignInController';
import { makeSignUpController } from '../factories/auth/makeSignUpController';
import { makeAuthenticationMiddleware } from '../factories/middlewares/makeAuthenticationMiddleware';
import { makeCreateTaskController } from '../factories/tasks/makeCreateTaskController';
import { makeDeleteTaskController } from '../factories/tasks/makeDeleteTaskController';
import { makeGetTaskByIdController } from '../factories/tasks/makeGetTaskByIdController';
import { makeGetTasksByAccountController } from '../factories/tasks/makeGetTasksByAccountController';
import { makeUpdateTaskController } from '../factories/tasks/makeUpdateTaskController';
import { makeDeleteAccountController } from '../factories/users/makeDeleteAccountController';
import { makeGetAccountByIdController } from '../factories/users/makeGetAccountByIdController';
import { makeGetAccountsController } from '../factories/users/makeGetAccountsController';
import { makeUpdateAccountController } from '../factories/users/makeUpdateAccountController';
import { middlewareAdapter } from './adapters/middlewareAdapter';
import { protectedRouteAdapter } from './adapters/protectedRouteAdapter';
import { unprotectedRouteAdapter } from './adapters/routeAdapter';

const app = express();
app.use(express.json());

// TODO: Organizar as rotas em um arquivo próprio.

// Sign in and Sign Up
app.post('/sign-up', unprotectedRouteAdapter(makeSignUpController()));
app.post('/sign-in', unprotectedRouteAdapter(makeSignInController()));

// Account CRUD
app.get(
  '/accounts',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeGetAccountsController()),
);
app.get(
  '/accounts/:accountId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeGetAccountByIdController()),
);
app.put(
  '/accounts/:accountId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeUpdateAccountController()),
);
app.delete(
  '/accounts/:accountId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeDeleteAccountController()),
);

// Tasks CRUD
app.get(
  '/tasks/account/:accountId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeGetTasksByAccountController()),
);
app.get(
  '/tasks/:taskId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeGetTaskByIdController()),
);
app.post(
  '/tasks/:accountId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeCreateTaskController()),
);
app.put(
  '/tasks/:taskId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeUpdateTaskController()),
);
app.delete(
  '/tasks/:taskId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeDeleteTaskController()),
);

app.listen(3001, () => {
  console.log('Servidor escutando em http://localhost:3001');
});
