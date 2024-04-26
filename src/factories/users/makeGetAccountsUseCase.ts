import { GetAccountsUseCase } from '../../app/useCases/users/GetAccountsUseCase';

export function makeGetAccountsUseCase() {
  return new GetAccountsUseCase();
}
