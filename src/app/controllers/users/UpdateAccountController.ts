import { ZodError, z } from 'zod';
import { AccountNotFound } from '../../errors/AccountNotFound';
import { IController, IRequest, IResponse } from '../../interfaces/IController';
import { UpdateAccountUseCase } from '../../useCases/users/UpdateAccountUseCase';

const schema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  password: z.string().min(8).optional(),
});

export class UpdateAccountController implements IController {
  constructor(private readonly updateAccountUseCase: UpdateAccountUseCase) {}
  async handle({ params, body }: IRequest): Promise<IResponse> {
    try {
      const { accountId } = params;
      const data = schema.parse(body);

      if (!accountId) {
        throw new AccountNotFound();
      }

      const updatedAccount = await this.updateAccountUseCase.execute({
        accountId,
        data,
      });

      return {
        statusCode: 200,
        body: { updatedAccount },
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

      if (error instanceof ZodError) {
        return {
          statusCode: 400,
          body: {
            message: error.issues,
          },
        };
      }

      throw error;
    }
  }
}
