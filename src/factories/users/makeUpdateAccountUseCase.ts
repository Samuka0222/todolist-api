import { UpdateAccountUseCase } from '../../app/useCases/users/UpdateAccountUseCase';

export function makeUpdateAccountUseCase() {
  return new UpdateAccountUseCase();
}
