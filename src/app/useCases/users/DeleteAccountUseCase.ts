import { AccountNotFound } from '../../errors/AccountNotFound';
import { prismaClient } from '../../libs/prismaClient';

interface IInput {
  accountId: string;
}

type IOutput = void;

export class DeleteAccountUseCase {
  async execute({ accountId }: IInput): Promise<IOutput> {
    const account = await prismaClient.account.findFirst({
      where: {
        id: accountId,
      },
    });

    if (!account) {
      throw new AccountNotFound();
    }

    await prismaClient.account.delete({
      where: {
        id: accountId,
      },
    });
  }
}
