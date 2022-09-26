import {
  DepositTransactionDto,
  TransferTransactionDto,
  WithdrawalTransactionDto,
} from '../../../dto';

export class MakeDepositCommand {
  constructor(
    public readonly depositTransactionDto: DepositTransactionDto,
    public readonly destinyAccount: string,
    public readonly data?: {
      withdrawalInfo: WithdrawalTransactionDto;
      transferInfo: TransferTransactionDto;
    },
  ) {}
}
