import { IEvent } from '@nestjs/cqrs';

import { ClientDataTest } from '../../../clients/interfaces';
import {
  DepositTransactionDto,
} from '../../dto';

export class CreateDepositEvent implements IEvent{
  constructor(
    public readonly createDepositInfoDto: DepositTransactionDto,
    public readonly fromAccount: string,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
