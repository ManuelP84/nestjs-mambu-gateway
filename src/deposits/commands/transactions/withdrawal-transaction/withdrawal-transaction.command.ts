import { ClientDataTest } from '../../../../clients/interfaces';
import { WithdrawalTransactionDto } from '../../../dto';

export class MakeWithdrawalCommand {
  constructor(
    public readonly withdrawalTransactionDto: WithdrawalTransactionDto,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
