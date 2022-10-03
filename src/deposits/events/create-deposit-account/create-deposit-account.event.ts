import { IEvent } from '@nestjs/cqrs';

import { ClientDataTest } from '../../../clients/interfaces';
import {
  CreateDepositAccountDto,
} from '../../dto';

export class CreateDepositAccountEvent implements IEvent{
  constructor(
    public readonly createDepositAccountDto: CreateDepositAccountDto,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
