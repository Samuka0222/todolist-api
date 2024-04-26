import { CreateTaskController } from '../../app/controllers/tasks/CreateTaskController';
import { makeCreateTaskUseCase } from './makeCreateTaskUseCase';

export function makeCreateTaskController() {
  const createTaskUseCase = makeCreateTaskUseCase();
  return new CreateTaskController(createTaskUseCase);
}
