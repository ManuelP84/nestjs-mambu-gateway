import { firstValueFrom, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable, BadRequestException } from '@nestjs/common';
import { EventBus, ofType } from '@nestjs/cqrs';

import {
  CreateDepositAccountDto,
  DepositTransactionDto,
  TransferTransactionDto,
  WithdrawalTransactionDto,
} from './dto';
import { CreateClientEvent } from '../clients/events';
import { getTestClient } from '../clients/helpers';
import { Flags } from '../common/enums/flags.enum';
import { HttpExceptionEvent } from '../common/events';
import { HttpStatusEvent } from '../common/events';
import { CreateDepositAccountEvent, CreateDepositEvent } from './events';
import { CreateTransferEvent, CreateWithdrawalEvent } from './events';

@Injectable()
export class DepositsService {
  constructor(private readonly eventBus: EventBus) {}
  async depositAccount(createDepositAccountDto: CreateDepositAccountDto) {
    await this.eventBus.publish(
      new CreateDepositAccountEvent(createDepositAccountDto, Flags.PRODUCTION),
    );
    await this.handleExceptions();
  }

  async depositTransaction(
    depositTransactionDto: DepositTransactionDto,
    fromAccount: string,
  ) {
    await this.eventBus.publish(
      new CreateDepositEvent(
        depositTransactionDto,
        fromAccount,
        Flags.PRODUCTION,
      ),
    );
    await this.handleExceptions();
  }

  async depositWithdrawal(
    withdrawalTransactionDto: WithdrawalTransactionDto,
    fromAccount: string,
  ) {
    await this.eventBus.publish(
      new CreateWithdrawalEvent(
        withdrawalTransactionDto,
        fromAccount,
        Flags.PRODUCTION,
      ),
    );
    await this.handleExceptions();
  }

  async transferTransaction(
    transferTransactionDto: TransferTransactionDto,
    fromAccount: string,
  ) {
    await this.eventBus.publish(
      new CreateTransferEvent(
        transferTransactionDto,
        fromAccount,
        Flags.PRODUCTION,
      ),
    );
    await this.handleExceptions();
  }

  async clientTransactionsCycle() {
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
