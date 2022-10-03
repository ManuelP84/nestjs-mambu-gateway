import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Logger } from '@nestjs/common';
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';

export class ErrorsInterceptors implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const ctx = context.switchToHttp();
    //const request = ctx.getRequest();
    //const response = ctx.getResponse();
    const logger = new Logger(ErrorsInterceptors.name);
    logger.log('Before the interceptor...');
    return next.handle().pipe(tap(() => logger.log('After the interceptor...')));
  }
}
