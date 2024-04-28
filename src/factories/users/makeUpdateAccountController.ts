import { UpdateAccountController } from '../../app/controllers/accounts/UpdateAccountController';
import { makeUpdateAccountUseCase } from './makeUpdateAccountUseCase';

export function makeUpdateAccountController() {
  const updateAccountController = makeUpdateAccountUseCase();
  return new UpdateAccountController(updateAccountController);
}
