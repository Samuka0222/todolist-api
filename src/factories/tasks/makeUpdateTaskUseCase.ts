import { UpdateTaskUseCase } from '../../app/useCases/tasks/UpdateTaskUseCase';

export function makeUpdateTaskUseCase() {
  return new UpdateTaskUseCase();
}
