import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUserIdDecorator = createParamDecorator(
  (data: string, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest();
    return request.user['sub'];
  },
);
