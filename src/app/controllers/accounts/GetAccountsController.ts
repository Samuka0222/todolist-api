import { IController, IRequest, IResponse } from '../../interfaces/IController';
import { GetAccountsUseCase } from '../../useCases/accounts/GetAccountsUseCase';

export class GetAccountsController implements IController {
  constructor(private readonly getAccountUseCase: GetAccountsUseCase) {}
  async handle(request: IRequest): Promise<IResponse> {
    try {
      const accounts = await this.getAccountUseCase.execute();

      return {
        statusCode: 200,
        body: accounts,
      };
    } catch (error) {
      return {
        statusCode: 400,
        body: {
          message: 'Accounts could not be retrieved',
        },
      };
    }
  }
}
