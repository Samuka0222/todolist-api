import { prismaClient } from '../../libs/prismaClient';

export class GetAccountsUseCase {
  async execute() {
    const accounts = await prismaClient.account.findMany({
      include: {
        task: true,
      },
    });

    if (!accounts) {
      throw new Error('No accounts found');
    }

    return accounts;
  }
}
