import { ICommand } from '@nestjs/cqrs';

import { ClientDataTest } from '../../interfaces';
import { CreateClientDto } from '../../dto';

export class CreateClientCommand implements ICommand{
  constructor(
    public readonly createClientDto: CreateClientDto,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
