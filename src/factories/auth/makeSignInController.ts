import { SignInController } from '../../app/controllers/auth/SignInController';
import { makeSignInUsecase } from './makeSignInUseCase';

export function makeSignInController() {
  const signInUseCase = makeSignInUsecase();
  return new SignInController(signInUseCase);
}
