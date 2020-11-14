import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AwsEvent = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
	const request = ctx.switchToHttp().getRequest();		
    return JSON.parse(decodeURIComponent(request.headers["x-apigateway-event"].toString()));
  },
);