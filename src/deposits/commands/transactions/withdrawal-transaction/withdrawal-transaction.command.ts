import { ICommand } from '@nestjs/cqrs';

import { ClientDataTest } from '../../../../clients/interfaces';
import { WithdrawalTransactionDto } from '../../../dto';

export class MakeWithdrawalCommand implements ICommand{
  constructor(
    public readonly withdrawalTransactionDto: WithdrawalTransactionDto,
    public readonly fromAccount: string,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
