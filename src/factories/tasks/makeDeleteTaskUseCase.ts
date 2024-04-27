import { DeleteTaskUseCase } from '../../app/useCases/tasks/DeleteTaskUseCase';

export function makeDeleteTaskUseCase() {
  return new DeleteTaskUseCase();
}
