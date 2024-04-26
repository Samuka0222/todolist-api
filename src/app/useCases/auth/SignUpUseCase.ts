import { hash } from 'bcryptjs';
import { AccountAlreadyExists } from '../../errors/AccountAlreadyExists';
import { prismaClient } from '../../libs/prismaClient';

interface IInput {
  name: string;
  email: string;
  password: string;
}

type IOutput = void;

export class SignUpUseCase {
  constructor(private readonly salt: number) {}
  async execute({ name, email, password }: IInput): Promise<IOutput> {
    const accountAlreadyExists = await prismaClient.account.findUnique({
      where: { email },
    });

    if (accountAlreadyExists) {
      throw new AccountAlreadyExists();
    }

    const hashedPassword = await hash(password, this.salt); // Manter o salt round entre 8-12

    await prismaClient.account.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }
}
