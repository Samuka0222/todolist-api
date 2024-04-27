import { GetTasksByAccountUseCase } from '../../app/useCases/tasks/GetTasksByAccountUseCase';

export function makeGetTasksByAccountUseCase() {
  return new GetTasksByAccountUseCase();
}
