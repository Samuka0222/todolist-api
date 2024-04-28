import { AccountNotFound } from '../../errors/AccountNotFound';
import { prismaClient } from '../../libs/prismaClient';

interface IInput {
  accountId: string;
  data: Record<string, any>;
}

type IOutput = void;

export class UpdateAccountUseCase {
  async execute({ accountId, data }: IInput): Promise<IOutput> {
    const account = await prismaClient.account.findFirst({
      where: {
        id: accountId,
      },
    });

    if (!account) {
      throw new AccountNotFound();
    }

    await prismaClient.account.update({
      where: {
        id: accountId,
      },
      data: {
        ...data,
      },
    });
  }
}
