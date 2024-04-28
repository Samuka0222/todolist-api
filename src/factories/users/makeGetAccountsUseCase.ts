import { GetAccountsUseCase } from '../../app/useCases/accounts/GetAccountsUseCase';

export function makeGetAccountsUseCase() {
  return new GetAccountsUseCase();
}
