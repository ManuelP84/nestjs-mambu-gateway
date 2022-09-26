import { TransferTransactionDto, WithdrawalTransactionDto } from "../../dto";

export class CreateWithdrawalEvent {
  constructor(
    public readonly createWithdrawalDto: WithdrawalTransactionDto,
    public readonly destinyAccount: string,
    public readonly data?: {
      transferInfo: TransferTransactionDto;
    },
  ) {}
}
