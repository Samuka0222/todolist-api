export interface IRequest {
  body: Record<string, any>;
  params: Record<string, string>;
  accountId: string | undefined;
  headers: Record<string, any>;
}

export interface IResponse {
  statusCode: number;
  body: Record<string, any> | null;
}

export interface IController {
  handle(request: IRequest): Promise<IResponse>;
}
