import {
  DepositTransactionDto,
  TransferTransactionDto,
  WithdrawalTransactionDto,
} from '../../dto';

export class CreateDepositEvent {
  constructor(
    public readonly createDepositInfoDto: DepositTransactionDto,
    public readonly destinyAccount: string,
    public readonly data?: {
      withdrawalInfo: WithdrawalTransactionDto;
      transferInfo: TransferTransactionDto;
      transferAccount: string;
    },
  ) {}
}
