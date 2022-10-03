import { IEvent } from '@nestjs/cqrs';
import { HttpStatus } from '@nestjs/common';
export class HttpStatusEvent implements IEvent {
    constructor(
        public readonly status: HttpStatus
    ){}
}