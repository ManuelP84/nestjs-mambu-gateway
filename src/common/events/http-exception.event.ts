import { IEvent } from '@nestjs/cqrs';
import { HttpException } from '@nestjs/common';
export class HttpExceptionEvent implements IEvent {
    constructor(
        public readonly status: HttpException
    ){}
}