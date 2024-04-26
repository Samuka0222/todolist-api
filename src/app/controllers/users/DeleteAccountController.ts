import { AccountNotFound } from '../../errors/AccountNotFound';
import { IController, IRequest, IResponse } from '../../interfaces/IController';
import { DeleteAccountUseCase } from '../../useCases/users/DeleteAccountUseCase';

export class DeleteAccountController implements IController {
  constructor(private readonly deleteAccountUseCase: DeleteAccountUseCase) {}
  async handle({ params }: IRequest): Promise<IResponse> {
    try {
      console.log(params);
      const { accountId } = params;
      if (!accountId) {
        throw new AccountNotFound();
      }

      // TODO: Adicionar processo para deletar as Tasks do Usuário

      await this.deleteAccountUseCase.execute({ accountId });
      return {
        statusCode: 200,
        body: {
          message: 'Account deleted successfully',
        },
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
