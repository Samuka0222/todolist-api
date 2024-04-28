import { Request, Response } from 'express';
import { IController } from '../../app/interfaces/IController';

export function protectedRouteAdapter(controller: IController) {
  return async (request: Request, response: Response) => {
    const accountId = request.metadata.accountId
      ? request.metadata.accountId
      : undefined;

    const { body, statusCode } = await controller.handle({
      body: request.body,
      params: request.params,
      accountId,
      headers: request.headers,
    });

    response.status(statusCode).json(body);
  };
}
