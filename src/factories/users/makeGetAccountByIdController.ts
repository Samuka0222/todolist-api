import { GetAccountByIdController } from '../../app/controllers/users/GetAccountByIdController';
import { makeGetAccountByIdUseCase } from './makeGetAccountByIdUseCase';

export function makeGetAccountByIdController() {
  const getAccountByIdUseCase = makeGetAccountByIdUseCase();
  return new GetAccountByIdController(getAccountByIdUseCase);
}
