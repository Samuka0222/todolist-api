import { UpdateTaskController } from '../../app/controllers/tasks/UpdateTaskController';
import { makeUpdateTaskUseCase } from './makeUpdateTaskUseCase';

export function makeUpdateTaskController() {
  const updateTaskUseCase = makeUpdateTaskUseCase();
  return new UpdateTaskController(updateTaskUseCase);
}
