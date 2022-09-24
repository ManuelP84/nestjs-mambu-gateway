import { Injectable } from '@nestjs/common';
import {
  DepositTransactionDto,
  TransferTransactionDto,
  WithdrawalTransactionDto,
} from './dto';
import { CreateDepositAccountDto } from './dto/accounts/create-deposit.dto';

@Injectable()
export class DepositsService {
  depositAccount(createDepositDto: CreateDepositAccountDto) {
    return 'This action adds a new deposit';
  }

  depositTransaction(depositTransactionDto: DepositTransactionDto) {
    return 'This action adds a new deposit';
  }

  depositWithdrawal(withdrawalTransactionDto: WithdrawalTransactionDto) {
    return 'This action adds a new deposit';
  }

  transferTransaction(transferTransactionDto: TransferTransactionDto) {
    return 'This action adds a new deposit';
  }
}
