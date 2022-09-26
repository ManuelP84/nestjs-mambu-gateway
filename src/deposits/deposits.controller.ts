import { Controller, Post, Body, Param } from '@nestjs/common';
import { DepositsService } from './deposits.service';
import {
  CreateDepositAccountDto,
  DepositTransactionDto,
  TransferTransactionDto,
  WithdrawalTransactionDto,
  AccountTransactionsDto
} from './dto';

@Controller('deposits')
export class DepositsController {
  constructor(private readonly depositsService: DepositsService) {}

  // @Post()
  // depositAccount(@Body() createDepositDto: CreateDepositAccountDto) {
  //   return this.depositsService.depositAccount(createDepositDto);
  // }

  // @Post('deposit-transactions')
  // depositTransaction(@Body() depositTransactionDto: DepositTransactionDto) {
  //   return this.depositsService.depositTransaction(depositTransactionDto);
  // }

  // @Post('withdrawal-transactions')
  // depositWithdrawal(
  //   @Body() withdrawalTransactionDto: WithdrawalTransactionDto,
  // ) {
  //   return this.depositsService.depositWithdrawal(withdrawalTransactionDto);
  // }

  // @Post('transfer-transactions')
  // transferTransaction(@Body() transferTransactionDto: TransferTransactionDto) {
  //   return this.depositsService.transferTransaction(transferTransactionDto);
  // }

  @Post('cycle')
  async accountTransaction(
    @Body() accountTransactionDto: AccountTransactionsDto,
    ) {
    await this.depositsService.accountTransaction(accountTransactionDto);
  }
}
