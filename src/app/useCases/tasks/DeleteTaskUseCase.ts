import { TaskNotFound } from '../../errors/TaskNotFound';
import { prismaClient } from '../../libs/prismaClient';

interface IInput {
  taskId: string;
}

type IOutput = void;

export class DeleteTaskUseCase {
  async execute({ taskId }: IInput): Promise<IOutput> {
    const task = await prismaClient.task.findFirst({
      where: {
        id: taskId,
      },
    });

    if (!task) {
      throw new TaskNotFound();
    }

    await prismaClient.task.delete({
      where: {
        id: task.id,
      },
    });
  }
}
