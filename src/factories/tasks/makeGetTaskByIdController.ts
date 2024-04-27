import { GetTaskByIdController } from '../../app/controllers/tasks/GetTaskByIdController';
import { makeGetTaskByIdUseCase } from './makeGetTaskByIdUseCase';

export function makeGetTaskByIdController() {
  const getTaskByIdUseCase = makeGetTaskByIdUseCase();
  return new GetTaskByIdController(getTaskByIdUseCase);
}
