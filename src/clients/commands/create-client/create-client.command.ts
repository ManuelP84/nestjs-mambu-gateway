import { ClientDataTest } from '../../interfaces';
import { CreateClientDto } from '../../dto';

export class CreateClientCommand {
  constructor(
    public readonly createClientDto: CreateClientDto,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
