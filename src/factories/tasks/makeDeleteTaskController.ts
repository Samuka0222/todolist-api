import { DeleteTaskController } from '../../app/controllers/tasks/DeleteTaskController';
import { makeDeleteTaskUseCase } from './makeDeleteTaskUseCase';

export function makeDeleteTaskController() {
  const deleteTaskUseCase = makeDeleteTaskUseCase();
  return new DeleteTaskController(deleteTaskUseCase);
}
