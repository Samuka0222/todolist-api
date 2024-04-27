import { AccountNotFound } from '../../errors/AccountNotFound';
import { IController, IRequest, IResponse } from '../../interfaces/IController';
import { GetTasksByAccountUseCase } from '../../useCases/tasks/GetTasksByAccountUseCase';

export class GetTasksByAccountController implements IController {
  constructor(
    private readonly getTasksByAccountUseCase: GetTasksByAccountUseCase,
  ) {}

  async handle({ params }: IRequest): Promise<IResponse> {
    try {
      const { accountId } = params;
      if (!accountId) {
        throw new AccountNotFound();
      }

      const tasks = await this.getTasksByAccountUseCase.execute({ accountId });

      return {
        statusCode: 200,
        body: tasks,
      };
    } catch (error) {
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
