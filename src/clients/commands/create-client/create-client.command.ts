import {
  CreateDepositAccountDto,
  DepositTransactionDto,
  TransferTransactionDto,
  WithdrawalTransactionDto,
} from 'src/deposits/dto';
import { CreateClientDto } from '../../dto';

export class CreateClientCommand {
  constructor(
    public readonly createClientDto: CreateClientDto,
    public readonly data?: {
      accountInfo: CreateDepositAccountDto;
      depositInfo: DepositTransactionDto;
      withdrawalInfo: WithdrawalTransactionDto;
      transferInfo: TransferTransactionDto;
    },
  ) {}
}
