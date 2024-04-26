import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { InvalidCredentials } from '../../errors/InvalidCredentials';
import { prismaClient } from '../../libs/prismaClient';

interface IInput {
  email: string;
  password: string;
}

interface IOutput {
  acessToken: string;
}

export class SignInUseCase {
  constructor(private readonly jwtSecret: string) {}

  async execute({ email, password }: IInput): Promise<IOutput> {
    const account = await prismaClient.account.findUnique({
      where: { email },
    });

    if (!account) {
      throw new InvalidCredentials();
    }

    const isPasswordValid = await compare(password, account.password);

    if (!isPasswordValid) {
      throw new InvalidCredentials();
    }

    const acessToken = sign({ sub: account.id }, this.jwtSecret, {
      expiresIn: '1d',
    });
    return {
      acessToken,
    };
  }
}
