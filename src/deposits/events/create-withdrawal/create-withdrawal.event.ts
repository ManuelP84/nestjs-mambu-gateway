import { IEvent } from '@nestjs/cqrs';

import { ClientDataTest } from '../../../clients/interfaces';
import { WithdrawalTransactionDto } from '../../dto';

export class CreateWithdrawalEvent implements IEvent{
  constructor(
    public readonly createWithdrawalDto: WithdrawalTransactionDto,
    public readonly fromAccount: string,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
