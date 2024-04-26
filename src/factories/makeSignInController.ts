import { SignInController } from '../app/controllers/SignInController';
import { makeSignInUsecase } from './makeSignInUseCase';

export function makeSignInController() {
  const signInUseCase = makeSignInUsecase();
  return new SignInController(signInUseCase);
}
