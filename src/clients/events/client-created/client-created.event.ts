import { ClientDataTest } from '../../interfaces';
import { ResponseClientDto } from '../../dto/response-client.dto';
import { IEvent } from '@nestjs/cqrs';
export class ClientCreatedEvent implements IEvent{
  constructor(
    public readonly clientResponse: ResponseClientDto,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
