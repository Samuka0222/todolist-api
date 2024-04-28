import { Router } from 'express';
import { makeDeleteAccountController } from '../../factories/accounts/makeDeleteAccountController';
import { makeGetAccountByIdController } from '../../factories/accounts/makeGetAccountByIdController';
import { makeGetAccountsController } from '../../factories/accounts/makeGetAccountsController';
import { makeUpdateAccountController } from '../../factories/accounts/makeUpdateAccountController';
import { makeAuthenticationMiddleware } from '../../factories/middlewares/makeAuthenticationMiddleware';
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
