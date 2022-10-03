import { ClientDataTest } from '../../interfaces';
import { CreateClientDto } from '../../dto';
import { IEvent } from '@nestjs/cqrs';

export class CreateClientEvent implements IEvent{
  constructor(
    public readonly createClientDto: CreateClientDto,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
