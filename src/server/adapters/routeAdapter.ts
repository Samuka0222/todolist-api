import { Request, Response } from 'express';
import { IController } from '../../app/interfaces/IController';

export function unprotectedRouteAdapter(controller: IController) {
  return async (request: Request, response: Response) => {
    const { body, statusCode } = await controller.handle({
      body: request.body,
      params: request.params,
      headers: request.headers,
    });

    response.status(statusCode).json(body);
  };
}
