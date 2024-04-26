import { DeleteAccountController } from '../../app/controllers/users/DeleteAccountController';
import { makeDeleteAccountUseCase } from './makeDeleteAccountUseCase';

export function makeDeleteAccountController() {
  const deleteAccountUseCase = makeDeleteAccountUseCase();
  return new DeleteAccountController(deleteAccountUseCase);
}
