import { Router } from 'express';
import { makeAuthenticationMiddleware } from '../../factories/middlewares/makeAuthenticationMiddleware';
import { makeCreateTaskController } from '../../factories/tasks/makeCreateTaskController';
import { makeDeleteTaskController } from '../../factories/tasks/makeDeleteTaskController';
import { makeGetTaskByIdController } from '../../factories/tasks/makeGetTaskByIdController';
import { makeGetTasksByAccountController } from '../../factories/tasks/makeGetTasksByAccountController';
import { makeUpdateTaskController } from '../../factories/tasks/makeUpdateTaskController';
import { middlewareAdapter } from '../adapters/middlewareAdapter';
import { protectedRouteAdapter } from '../adapters/protectedRouteAdapter';

const tasksRouter = Router();

tasksRouter.get(
  '/tasks/account/:accountId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeGetTasksByAccountController()),
);

tasksRouter.get(
  '/tasks/:taskId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeGetTaskByIdController()),
);

tasksRouter.post(
  '/tasks/:accountId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeCreateTaskController()),
);

tasksRouter.put(
  '/tasks/:taskId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeUpdateTaskController()),
);

tasksRouter.delete(
  '/tasks/:taskId',
  middlewareAdapter(makeAuthenticationMiddleware()),
  protectedRouteAdapter(makeDeleteTaskController()),
);

export { tasksRouter };
