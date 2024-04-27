import { TaskNotFound } from '../../errors/TaskNotFound';
import { IController, IRequest, IResponse } from '../../interfaces/IController';
import { GetTaskByIdUseCase } from '../../useCases/tasks/GetTaskByIdUseCase';

export class GetTaskByIdController implements IController {
  constructor(private readonly getTaskByIdUseCase: GetTaskByIdUseCase) {}

  async handle({ params }: IRequest): Promise<IResponse> {
    try {
      const { taskId } = params;
      if (!taskId) {
        throw new TaskNotFound();
      }

      const task = await this.getTaskByIdUseCase.execute({ taskId });

      return {
        statusCode: 200,
        body: task,
      };
    } catch (error) {
      if (error instanceof TaskNotFound) {
        return {
          statusCode: 404,
          body: {
            error: 'Task not found',
          },
        };
      }

      throw error;
    }
  }
}
