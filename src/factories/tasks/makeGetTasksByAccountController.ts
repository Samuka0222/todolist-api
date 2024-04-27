import { GetTasksByAccountController } from '../../app/controllers/tasks/GetTasksByAccountController';
import { makeGetTasksByAccountUseCase } from './makeGetTasksByAccountUseCase';

export function makeGetTasksByAccountController() {
  const getTasksByAccountUseCase = makeGetTasksByAccountUseCase();
  return new GetTasksByAccountController(getTasksByAccountUseCase);
}
