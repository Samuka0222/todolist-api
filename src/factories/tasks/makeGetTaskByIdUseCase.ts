import { GetTaskByIdUseCase } from '../../app/useCases/tasks/GetTaskByIdUseCase';

export function makeGetTaskByIdUseCase() {
  return new GetTaskByIdUseCase();
}
