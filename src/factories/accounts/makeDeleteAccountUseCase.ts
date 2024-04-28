import { DeleteAccountUseCase } from '../../app/useCases/accounts/DeleteAccountUseCase';

export function makeDeleteAccountUseCase() {
  return new DeleteAccountUseCase();
}
