import { ZodError, z } from 'zod';
import { AccountNotFound } from '../../errors/AccountNotFound';
import { IController, IRequest, IResponse } from '../../interfaces/IController';
import { CreateTaskUseCase } from '../../useCases/tasks/CreateTaskUseCase';

const schema = z.object({
  description: z.string().min(2),
});

export class CreateTaskController implements IController {
  constructor(private readonly createTaskUseCase: CreateTaskUseCase) {}
  async handle({ body, accountId }: IRequest): Promise<IResponse> {
    try {
      // console.log(body, accountId)
      const { description } = schema.parse(body);

      if (!accountId) {
        throw new AccountNotFound();
      }
      const newTask = await this.createTaskUseCase.execute({
        description,
        accountId,
      });

      return {
        statusCode: 201,
        body: {
          message: 'Task created successfully',
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

      if (error instanceof AccountNotFound) {
        return {
          statusCode: 404,
          body: {
            error: 'Account not found',
          },
        };
      }

      throw error;
    }
  }
}
