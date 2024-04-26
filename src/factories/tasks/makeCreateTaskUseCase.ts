import { CreateTaskUseCase } from '../../app/useCases/tasks/CreateTaskUseCase';

export function makeCreateTaskUseCase() {
  return new CreateTaskUseCase();
}
