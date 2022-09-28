import { ClientDataTest } from '../../../clients/interfaces';
import { WithdrawalTransactionDto } from '../../dto';

export class CreateWithdrawalEvent {
  constructor(
    public readonly createWithdrawalDto: WithdrawalTransactionDto,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
