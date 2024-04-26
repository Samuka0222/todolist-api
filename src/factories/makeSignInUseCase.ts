import { env } from '../app/config/env';
import { SignInUseCase } from '../app/useCases/SignInUseCase';

export function makeSignInUsecase() {
  return new SignInUseCase(env.jwtsecret!);
}
