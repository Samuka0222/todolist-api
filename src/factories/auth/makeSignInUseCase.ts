import { env } from '../../app/config/env';
import { SignInUseCase } from '../../app/useCases/auth/SignInUseCase';

export function makeSignInUsecase() {
  return new SignInUseCase(env.jwtsecret!);
}
