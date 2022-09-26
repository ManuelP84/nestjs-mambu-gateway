import { TransferTransactionDto, WithdrawalTransactionDto } from '../../../dto';
export class MakeWithdrawalCommand {
  constructor(
    public readonly withdrawalTransactionDto: WithdrawalTransactionDto,
    public readonly destinyAccount: string,
    public readonly data?: {
      transferInfo: TransferTransactionDto;
    },
  ) {}
}
