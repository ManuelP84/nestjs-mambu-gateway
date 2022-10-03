import { Injectable, BadRequestException } from '@nestjs/common';
import { EventBus, ofType } from '@nestjs/cqrs';
import {
  AccountTransactionsDto,
  DepositTransactionDto,
  TransferTransactionDto,
  WithdrawalTransactionDto,
} from './dto';
import { CreateClientEvent } from '../clients/events/create-client/create-client.event';
import { getTestClient } from '../clients/helpers';
import { Flags } from '../common/enums/flags.enum';
import { ClientCreatedEvent } from '../clients/events/client-created/client-created.event';
import { firstValueFrom, merge, of, tap, throwError } from 'rxjs';
import { LoanCreatedEvent } from '../loans/events/loan-created/loan-created.event';
import { HttpExceptionEvent } from '../common/events';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { HttpStatusEvent } from '../common/events/http-status.event';

@Injectable()
export class DepositsService {
  constructor(private readonly eventBus: EventBus) {}
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

  async clientTransactions() {
    const newClient = getTestClient();
    await this.eventBus.publish(new CreateClientEvent(newClient, Flags.TEST));
    await this.handleExceptions();
  }

  async handleExceptions() {
    const status = await firstValueFrom(
      merge(
        this.eventBus.pipe(ofType(HttpStatusEvent)),
        this.eventBus.pipe(ofType(HttpExceptionEvent)),
      ).pipe(map((value) => value.status)),
    );

    if (status !== 201) {
      throw new BadRequestException('Something went wrong...');
    }
  }
}