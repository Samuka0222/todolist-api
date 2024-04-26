import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { env } from '../config/env';
import { InvalidCredentials } from '../errors/InvalidCredentials';
import { prismaClient } from '../libs/prismaClient';

interface IInput {
  email: string;
  password: string;
}

interface IOutput {
  acessToken: string;
}

export class SignInUseCase {
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

    const acessToken = sign({ sub: account.id }, env.jwtsecret!, {
      expiresIn: '1d',
    });
    return {
      acessToken,
    };
  }
}
