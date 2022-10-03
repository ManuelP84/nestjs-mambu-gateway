import { Controller, Post, Body, Param } from '@nestjs/common';

import { DepositsService } from './deposits.service';
import {
  CreateDepositAccountDto,
  DepositTransactionDto,
  TransferTransactionDto,
  WithdrawalTransactionDto,
} from './dto';

@Controller('deposits')
export class DepositsController {
  constructor(private readonly depositsService: DepositsService) {}

  @Post('account')
  depositAccount(@Body() createDepositDto: CreateDepositAccountDto) {
    return this.depositsService.depositAccount(createDepositDto);
  }

  @Post('deposit-transactions/:fromAccount')
  depositTransaction(
    @Body() depositTransactionDto: DepositTransactionDto,
    @Param('fromAccount') fromAccount: string,
  ) {
    return this.depositsService.depositTransaction(
      depositTransactionDto,
      fromAccount,
    );
  }

  @Post('withdrawal-transactions/:fromAccount')
  depositWithdrawal(
    @Body() withdrawalTransactionDto: WithdrawalTransactionDto,
    @Param('fromAccount') fromAccount: string,
  ) {
    return this.depositsService.depositWithdrawal(
      withdrawalTransactionDto,
      fromAccount,
    );
  }

  @Post('transfer-transactions/:fromAccount')
  transferTransaction(
    @Body() transferTransactionDto: TransferTransactionDto,
    @Param('fromAccount') fromAccount: string,
  ) {
    return this.depositsService.transferTransaction(
      transferTransactionDto,
      fromAccount,
    );
  }

  @Post('cycle')
  clientTransactionsCycle() {
    return this.depositsService.clientTransactionsCycle();
  }
}
