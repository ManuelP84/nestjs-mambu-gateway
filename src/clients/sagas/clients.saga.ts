import { from, Observable, of, throwError } from 'rxjs';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';
import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CommandBus, ICommand, ofType, Saga } from '@nestjs/cqrs';

import { ClientLoanCreatedEvent, CreateClientEvent } from '../events';
import { ChangeStateCommand } from '../../loans/commands/change-state/change-state.command';
import { ChangeStateDto } from '../../loans/dtos/change-state/change-state.dto';
import { Client } from '../entities/client/client.entity';
import { CreateClientCommand } from '../commands';

@Injectable()
export class ClientSagas {
  constructor(private readonly commandBus: CommandBus) {}
  @Saga()
  createClient = (
    events$: Observable<CreateClientEvent>,
  ): Observable<ICommand> => {
    return events$.pipe(
      delay(1000),
      ofType(CreateClientEvent),
      map(
        (event) => new CreateClientCommand(event.createClientDto, event.flag),
      ),
    );
  };

  @Saga()
  ClientLoanCreated = (events$: Observable<any>): Observable<any> => {
    const logger = new Logger(ClientSagas.name);
    return events$.pipe(
      ofType(ClientLoanCreatedEvent),
      switchMap((event$) => {
        logger.log('Saga called ChangeStateCommand');
        return from(
          this.commandBus.execute<ChangeStateCommand, Client>(
            new ChangeStateCommand(
              { action: 'APPROVE' } as ChangeStateDto,
              event$.loanId,
            ),
          ),
        ).pipe(
          map((data) => {
            return new BadRequestException('Error');
            //console.log(data);
          }),
          catchError((err) => of(err)),

          ofType(BadRequestException),
          tap(() => console.log('si')),
        );
      }),

      catchError((err) => throwError(() => new Error('Error!!!!!!!!!!!!!!'))),
      map((data) => {
        //console.log(data);
        //return data;
      }),
      // catchError((error) => {
      //   return error;
      // }),
      //catchError(err => throwError(() => new BadRequestException())),
    );
  };
}
