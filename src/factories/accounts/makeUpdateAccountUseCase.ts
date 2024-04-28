import { UpdateAccountUseCase } from '../../app/useCases/accounts/UpdateAccountUseCase';

export function makeUpdateAccountUseCase() {
  return new UpdateAccountUseCase();
}
