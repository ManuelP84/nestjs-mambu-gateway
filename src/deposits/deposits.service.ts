import { Injectable } from '@nestjs/common';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { CreateClientCommand } from 'src/clients/commands';
import {
  AccountTransactionsDto,
  DepositTransactionDto,
  TransferTransactionDto,
  WithdrawalTransactionDto,
} from './dto';
import { CreateDepositAccountDto } from './dto/accounts/create-deposit.dto';
import { CreateClientEvent } from '../clients/events/create-client/create-client.event';

@Injectable()
export class DepositsService {
  constructor(private readonly eventBus: EventBus,){}
  // depositAccount(createDepositDto: CreateDepositAccountDto) {
  //   return 'This action adds a new deposit';
  // }

  // depositTransaction(depositTransactionDto: DepositTransactionDto) {
  //   return 'This action adds a new deposit';
  // }

  // depositWithdrawal(withdrawalTransactionDto: WithdrawalTransactionDto) {
  //   return 'This action adds a new deposit';
  // }

  // transferTransaction(transferTransactionDto: TransferTransactionDto) {
  //   return 'This action adds a new deposit';
  // }

  async accountTransaction(accountTransactionDto: AccountTransactionsDto){
    const { clientInfo, ...restInfo } = accountTransactionDto;
    await this.eventBus.publish(new CreateClientEvent(clientInfo, restInfo));
  }
}
