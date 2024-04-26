import { ZodError, z } from 'zod';
import { AccountAlreadyExists } from '../errors/AccountAlreadyExists';
import { IController, IRequest, IResponse } from '../interfaces/IController';
import { SignUpUseCase } from '../useCases/SignUpUseCase';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export class SignUpController implements IController {
  constructor(private readonly signUpUseCase: SignUpUseCase) {}
  // Inversão de dependecia, para não criar uma instância de SignUpUseCase, fazemos com que o signUpUseCase seja acionado quando o controller precisar

  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { name, email, password } = schema.parse(body);
      await this.signUpUseCase.execute({ name, email, password });

      return {
        statusCode: 204,
        body: null,
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

      if (error instanceof AccountAlreadyExists) {
        return {
          statusCode: 409,
          body: {
            error: 'This e-mail is already in use.',
          },
        };
      }

      throw error;
    }
  }
}
