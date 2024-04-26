import { GetAccountsController } from '../../app/controllers/users/GetAccountsController';
import { makeGetAccountsUseCase } from './makeGetAccountsUseCase';

export function makeGetAccountsController() {
  const getAccountsUseCase = makeGetAccountsUseCase();
  return new GetAccountsController(getAccountsUseCase);
}
