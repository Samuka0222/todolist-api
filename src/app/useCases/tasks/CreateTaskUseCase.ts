import { AccountNotFound } from '../../errors/AccountNotFound';
import { prismaClient } from '../../libs/prismaClient';

interface IInput {
  description: string;
  accountId: string;
}

type IOutput = void;

export class CreateTaskUseCase {
  async execute({ description, accountId }: IInput): Promise<IOutput> {
    const account = await prismaClient.account.findFirst({
      where: {
        id: accountId,
      },
    });

    if (!account) {
      throw new AccountNotFound();
    }

    await prismaClient.task.create({
      data: {
        description,
        accountId,
        concluded: false,
      },
    });
  }
}
