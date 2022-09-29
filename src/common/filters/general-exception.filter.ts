import { Request, Response } from 'express';
import { 
  ArgumentsHost, 
  Catch, 
  ExceptionFilter 
} from '@nestjs/common';

@Catch()
export class GeneralExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): void {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      message: exception.message,
      validation: exception.getResponse()['message'],
      method: request.method,
      errorName: exception?.name,
      timestamp: new Date().toString(),
      path: request.url,
    });
  }
}
