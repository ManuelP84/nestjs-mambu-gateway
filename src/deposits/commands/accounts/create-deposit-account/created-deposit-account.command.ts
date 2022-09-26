import {
  CreateDepositAccountDto,
  DepositTransactionDto,
  TransferTransactionDto,
  WithdrawalTransactionDto,
} from '../../../dto';

export class CreateDepositAccountCommand {
  constructor(
    public readonly createDepositAccountDto: CreateDepositAccountDto,
    public readonly data?: {
      depositInfo: DepositTransactionDto;
      withdrawalInfo: WithdrawalTransactionDto;
      transferInfo: TransferTransactionDto;
      transferAccount: string;
    },
  ) {}
}
