import { delay, map, Observable } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { Saga, ICommand, ofType } from '@nestjs/cqrs';

import { CreateDepositAccountEvent } from '../events/create-deposit-account/create-deposit-account.event';
import {
  CreateDepositAccountCommand,
  MakeDepositCommand,
  MakeTransferCommand,
  MakeWithdrawalCommand,
} from '../commands';
import {
  CreateDepositEvent,
  CreateTransferEvent,
  CreateWithdrawalEvent,
} from '../events';

@Injectable()
export class DepositTransactionSagas {
  @Saga()
  createDepositAccount = (
    events$: Observable<CreateDepositAccountEvent>,
  ): Observable<ICommand> => {
    return events$.pipe(
      delay(1000),
      ofType(CreateDepositAccountEvent),
      map(
        (event) =>
          new CreateDepositAccountCommand(
            event.createDepositAccountDto,
            event.flag,
            event.data,
          ),
      ),
    );
  };

  @Saga()
  makeDeposit = (
    events$: Observable<CreateDepositEvent>,
  ): Observable<ICommand> => {
    return events$.pipe(
      delay(1000),
      ofType(CreateDepositEvent),
      map(
        (event) =>
          new MakeDepositCommand(
            event.createDepositInfoDto,
            event.fromAccount,
            event.flag,
            event.data,
          ),
      ),
    );
  };

  @Saga()
  makeWithdrawal = (
    events$: Observable<CreateWithdrawalEvent>,
  ): Observable<ICommand> => {
    return events$.pipe(
      delay(5000),
      ofType(CreateWithdrawalEvent),
      map(
        (event) =>
          new MakeWithdrawalCommand(
            event.createWithdrawalDto,
            event.fromAccount,
            event.flag,
            event.data,
          ),
      ),
    );
  };

  @Saga()
  makeTransfer = (
    events$: Observable<CreateTransferEvent>,
  ): Observable<ICommand> => {
    return events$.pipe(
      delay(1000),
      ofType(CreateTransferEvent),
      map(
        (event) =>
          new MakeTransferCommand(
            event.createTransferDto,
            event.fromAccount,
            event.flag,
            event.data,
          ),
      ),
    );
  };
}
