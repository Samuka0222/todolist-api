import { SignUpUseCase } from '../../app/useCases/auth/SignUpUseCase';

export function makeSignUpUseCase() {
  const SALT = 10;

  return new SignUpUseCase(SALT);
}
