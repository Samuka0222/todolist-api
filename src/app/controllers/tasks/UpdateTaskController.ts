import { ZodError, z } from 'zod';
import { InvalidData } from '../../errors/InvalidData';
import { TaskNotFound } from '../../errors/TaskNotFound';
import { IController, IRequest, IResponse } from '../../interfaces/IController';
import { UpdateTaskUseCase } from '../../useCases/tasks/UpdateTaskUseCase';

const schema = z.object({
  description: z.string().min(2).optional(),
  concluded: z.boolean().optional(),
});

export class UpdateTaskController implements IController {
  constructor(private readonly updateTaskUseCase: UpdateTaskUseCase) {}

  async handle({ body, params }: IRequest): Promise<IResponse> {
    try {
      const data = schema.parse(body);
      const { taskId } = params;

      if (!taskId) {
        throw new TaskNotFound();
      }

      if (!data) {
        throw new InvalidData();
      }

      await this.updateTaskUseCase.execute({ taskId, data });

      return {
        statusCode: 200,
        body: {
          message: 'Task updated successfully',
        },
      };
    } catch (error) {
      if (error instanceof ZodError) {
        return {
          statusCode: 400,
          body: {
            message: error.issues,
          },
        };
      }

      if (error instanceof TaskNotFound) {
        return {
          statusCode: 404,
          body: {
            error: 'Task not found',
          },
        };
      }

      if (error instanceof InvalidData) {
        return {
          statusCode: 400,
          body: {
            error: 'No data sent',
          },
        };
      }
      throw error;
    }
  }
}
