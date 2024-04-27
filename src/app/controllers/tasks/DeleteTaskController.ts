import { TaskNotFound } from '../../errors/TaskNotFound';
import { IController, IRequest, IResponse } from '../../interfaces/IController';
import { DeleteTaskUseCase } from '../../useCases/tasks/DeleteTaskUseCase';

export class DeleteTaskController implements IController {
  constructor(private readonly deleteTaskUseCase: DeleteTaskUseCase) {}

  async handle({ params }: IRequest): Promise<IResponse> {
    try {
      const { taskId } = params;

      if (!taskId) {
        throw new TaskNotFound();
      }

      await this.deleteTaskUseCase.execute({ taskId });

      return {
        statusCode: 200,
        body: {
          message: 'Task deleted successfully',
        },
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
