import { UpdateAccountController } from '../../app/controllers/users/UpdateAccountController';
import { makeUpdateAccountUseCase } from './makeUpdateAccountUseCase';

export function makeUpdateAccountController() {
  const updateAccountController = makeUpdateAccountUseCase();
  return new UpdateAccountController(updateAccountController);
}
