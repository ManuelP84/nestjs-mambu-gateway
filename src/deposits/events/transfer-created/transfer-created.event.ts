import { IEvent } from '@nestjs/cqrs';

export class TransferCreatedEvent implements IEvent{
    constructor(public readonly transferResponse: any) {}
}