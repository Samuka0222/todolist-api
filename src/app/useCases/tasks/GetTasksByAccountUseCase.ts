import { Task } from '@prisma/client';
import { prismaClient } from '../../libs/prismaClient';

interface IInput {
  accountId: string;
}

interface IOutput {
  tasks: Task[];
}

export class GetTasksByAccountUseCase {
  async execute({ accountId }: IInput): Promise<IOutput> {
    const tasks = await prismaClient.task.findMany({
      where: {
        accountId,
      },
    });

    return { tasks };
  }
}
