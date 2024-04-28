import { Router } from 'express';
import { makeSignInController } from '../../factories/auth/makeSignInController';
import { makeSignUpController } from '../../factories/auth/makeSignUpController';
import { unprotectedRouteAdapter } from '../adapters/routeAdapter';

const authRouter = Router();

authRouter.post('/sign-up', unprotectedRouteAdapter(makeSignUpController()));
authRouter.post('/sign-in', unprotectedRouteAdapter(makeSignInController()));

export { authRouter };
