import {
  CreateDepositAccountDto,
  DepositTransactionDto,
  TransferTransactionDto,
  WithdrawalTransactionDto,
} from '../../dto';

export class CreateDepositAccountEvent {
  constructor(
    public readonly createDepositAccountDto: CreateDepositAccountDto,
    public readonly data?: {
      depositInfo: DepositTransactionDto;
      withdrawalInfo: WithdrawalTransactionDto;
      transferInfo: TransferTransactionDto;
    },
  ) {}
}
