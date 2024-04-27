import express from 'express';
import { makeSignInController } from '../factories/auth/makeSignInController';
import { makeSignUpController } from '../factories/auth/makeSignUpController';
import { makeAuthenticationMiddleware } from '../factories/middlewares/makeAuthenticationMiddleware';
import { makeCreateTaskController } from '../factories/tasks/makeCreateTaskController';
import { makeGetTasksByAccountController } from '../factories/tasks/makeGetTasksByAccountController';
import { makeUpdateTaskController } from '../factories/tasks/makeUpdateTaskController';
import { makeDeleteAccountController } from '../factories/users/makeDeleteAccountController';
import { makeGetAccountByIdController } from '../factories/users/makeGetAccountByIdController';
import { makeGetAccountsController } from '../factories/users/makeGetAccountsController';
import { makeUpdateAccountController } from '../factories/users/makeUpdateAccountController';
import { middlewareAdapter } from './adapters/middlewareAdapter';
import { routeAdapter } from './adapters/routeAdapter';

const app = express();
app.use(express.json());

// Sign in and Sign Up
app.post('/sign-up', routeAdapter(makeSignUpController()));
app.post('/sign-in', routeAdapter(makeSignInController()));

// Account CRUD
app.get(
  '/accounts',
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeGetAccountsController()),
);
app.get(
  '/accounts/:accountId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeGetAccountByIdController()),
);
app.put(
  '/accounts/:accountId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeUpdateAccountController()),
);
app.delete(
  '/accounts/:accountId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeDeleteAccountController()),
);

// Tasks CRUD
app.get(
  '/tasks/:accountId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeGetTasksByAccountController()),
);
app.post(
  '/tasks/:accountId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeCreateTaskController()),
);
app.put(
  '/tasks/:taskId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  routeAdapter(makeUpdateTaskController()),
);

app.listen(3001, () => {
  console.log('Servidor escutando em http://localhost:3001');
});
