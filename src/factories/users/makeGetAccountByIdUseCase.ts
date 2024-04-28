import { GetAccountByIdUseCase } from '../../app/useCases/accounts/GetAccountByIdUseCase';

export function makeGetAccountByIdUseCase() {
  return new GetAccountByIdUseCase();
}
