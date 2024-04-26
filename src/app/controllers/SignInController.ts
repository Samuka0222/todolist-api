import { ZodError, z } from 'zod';
import { InvalidCredentials } from '../errors/InvalidCredentials';
import { IController, IRequest, IResponse } from '../interfaces/IController';
import { SignInUseCase } from '../useCases/SignInUseCase';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export class SignInController implements IController {
  constructor(private readonly signInUseCase: SignInUseCase) {}
  // Inversão de dependecia, para não criar uma instância de SignUpUseCase, fazemos com que o signUpUseCase seja acionado quando o controller precisar
  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { email, password } = schema.parse(body);
      const { acessToken } = await this.signInUseCase.execute({
        email,
        password,
      });

      return {
        statusCode: 200,
        body: {
          acessToken,
        },
      };
    } catch (error) {
      if (error instanceof ZodError) {
        return {
          statusCode: 400,
          body: {
            message: error.issues,
          },
        };
      }

      if (error instanceof InvalidCredentials) {
        return {
          statusCode: 401,
          body: {
            error: 'Invalid credentials',
          },
        };
      }

      throw error;
    }
  }
}
