import { Task } from '@prisma/client';
import { TaskNotFound } from '../../errors/TaskNotFound';
import { prismaClient } from '../../libs/prismaClient';

interface IInput {
  taskId: string;
}

interface IOutput {
  task: Task;
}

export class GetTaskByIdUseCase {
  async execute({ taskId }: IInput): Promise<IOutput> {
    const task = await prismaClient.task.findFirst({
      where: {
        id: taskId,
      },
    });

    if (!task) {
      throw new TaskNotFound();
    }

    return { task };
  }
}
