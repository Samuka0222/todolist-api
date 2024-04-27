import { TaskNotFound } from '../../errors/TaskNotFound';
import { prismaClient } from '../../libs/prismaClient';

interface IInput {
  taskId: string;
  data: Record<string, any>;
}

type IOutput = void;

export class UpdateTaskUseCase {
  async execute({ taskId, data }: IInput): Promise<IOutput> {
    const task = await prismaClient.task.findFirst({
      where: {
        id: taskId,
      },
    });

    if (!task) {
      throw new TaskNotFound();
    }

    await prismaClient.task.update({
      where: {
        id: task.id,
      },
      data: {
        ...data,
      },
    });
  }
}
