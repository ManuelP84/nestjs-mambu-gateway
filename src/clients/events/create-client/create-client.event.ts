import { CreateClientDto } from '../../dto';
import {
  CreateDepositAccountDto,
  DepositTransactionDto,
  TransferTransactionDto,
  WithdrawalTransactionDto,
} from '../../../deposits/dto';

export class CreateClientEvent {
  constructor(
    public readonly createClientDto: CreateClientDto,
    public readonly data?: {
      accountInfo: CreateDepositAccountDto;
      depositInfo: DepositTransactionDto;
      withdrawalInfo: WithdrawalTransactionDto;
      transferInfo: TransferTransactionDto;
      transferAccount: string;
    },
  ) {}
}
