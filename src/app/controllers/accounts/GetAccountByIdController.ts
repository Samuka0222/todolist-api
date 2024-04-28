import { IController, IRequest, IResponse } from '../../interfaces/IController';
import { GetAccountByIdUseCase } from '../../useCases/accounts/GetAccountByIdUseCase';

export class GetAccountByIdController implements IController {
  constructor(private readonly getAccountByIdUseCase: GetAccountByIdUseCase) {}
  async handle({ params }: IRequest): Promise<IResponse> {
    const { accountId } = params;
    if (!accountId) {
      return {
        statusCode: 400,
        body: null,
      };
    }

    try {
      const account = await this.getAccountByIdUseCase.execute({ accountId });
      return {
        statusCode: 200,
        body: account,
      };
    } catch (error) {
      throw error;
    }
  }
}
