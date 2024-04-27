import { Account } from '@prisma/client';
import { AccountNotFound } from '../../errors/AccountNotFound';
import { prismaClient } from '../../libs/prismaClient';

interface IInput {
  accountId: string;
}

interface IOutput {
  account: Account;
}

export class GetAccountByIdUseCase {
  async execute({ accountId }: IInput): Promise<IOutput> {
    const account = await prismaClient.account.findFirst({
      where: {
        id: accountId,
      },
    });

    if (!account) {
      throw new AccountNotFound();
    }

    return { account };
  }
}
