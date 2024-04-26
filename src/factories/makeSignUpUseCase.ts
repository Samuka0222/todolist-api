import { SignUpUseCase } from '../app/useCases/SignUpUseCase';

export function makeSignUpUseCase() {
  const SALT = 10;

  return new SignUpUseCase(SALT);
}
