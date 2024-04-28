import { Account } from '@prisma/client';
import { prismaClient } from '../../libs/prismaClient';

interface IOutput {
  accounts: Account[];
}

export class GetAccountsUseCase {
  async execute(): Promise<IOutput> {
    const accounts = await prismaClient.account.findMany({
      include: {
        task: true,
      },
    });

    if (!accounts) {
      throw new Error('No accounts found');
    }

    return { accounts };
  }
}
