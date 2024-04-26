import { DeleteAccountUseCase } from '../../app/useCases/users/DeleteAccountUseCase';

export function makeDeleteAccountUseCase() {
  return new DeleteAccountUseCase();
}
