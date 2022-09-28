import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import {
  AccountTransactionsDto,
  DepositTransactionDto,
  TransferTransactionDto,
  WithdrawalTransactionDto,
} from './dto';
import { CreateClientEvent } from '../clients/events/create-client/create-client.event';
import { getTestClient } from '../clients/helpers';
import { Flags } from '../common/enums/flags.enum';

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

  async clientTransactions(){
    const newClient = getTestClient();
    await this.eventBus.publish(new CreateClientEvent(newClient, Flags.TEST));
  }
}
