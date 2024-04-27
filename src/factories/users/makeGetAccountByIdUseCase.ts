import { GetAccountByIdUseCase } from '../../app/useCases/users/GetAccountByIdUseCase';

export function makeGetAccountByIdUseCase() {
  return new GetAccountByIdUseCase();
}
