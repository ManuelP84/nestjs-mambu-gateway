import {
  CreateDepositAccountDto,
  DepositTransactionDto,
  TransferTransactionDto,
  WithdrawalTransactionDto,
} from '../../../deposits/dto';
import { ResponseClientDto } from '../../dto/response-client.dto';
export class ClientCreatedEvent {
  constructor(
    public readonly clientResponse: ResponseClientDto,
    public readonly data?: {
      accountInfo: CreateDepositAccountDto;
      depositInfo: DepositTransactionDto;
      withdrawalInfo: WithdrawalTransactionDto;
      transferInfo: TransferTransactionDto;
    },
  ) {}
}
