import { Router } from 'express';
import { makeAuthenticationMiddleware } from '../../factories/middlewares/makeAuthenticationMiddleware';
import { makeDeleteAccountController } from '../../factories/users/makeDeleteAccountController';
import { makeGetAccountByIdController } from '../../factories/users/makeGetAccountByIdController';
import { makeGetAccountsController } from '../../factories/users/makeGetAccountsController';
import { makeUpdateAccountController } from '../../factories/users/makeUpdateAccountController';
import { middlewareAdapter } from '../adapters/middlewareAdapter';
import { protectedRouteAdapter } from '../adapters/protectedRouteAdapter';

const accountsRouter = Router();

accountsRouter.get(
  '/accounts',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeGetAccountsController()),
);

accountsRouter.get(
  '/accounts/:accountId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeGetAccountByIdController()),
);

accountsRouter.put(
  '/accounts/:accountId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeUpdateAccountController()),
);

accountsRouter.delete(
  '/accounts/:accountId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeDeleteAccountController()),
);

export { accountsRouter };
