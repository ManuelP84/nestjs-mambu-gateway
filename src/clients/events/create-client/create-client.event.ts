import { ClientDataTest } from '../../interfaces';
import { CreateClientDto } from '../../dto';

export class CreateClientEvent {
  constructor(
    public readonly createClientDto: CreateClientDto,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
