import { delay, map, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable, Logger } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';

import { ClientLoanCreatedEvent } from '../events';
import { ChangeStateCommand } from '../../loans/commands/change-state/change-state.command';
import { ChangeStateDto } from '../../loans/dtos/change-state/change-state.dto';
import { Response } from 'express';

@Injectable()
export class ClientSagas {
  @Saga()
  ClientLoanCreated = (events: Observable<any>, res: Response): Observable<ICommand> => {
    const logger = new Logger(ClientSagas.name);
    return events.pipe(
      ofType(ClientLoanCreatedEvent),
      delay(5000),
      map((event) => {
        logger.log('Saga called ChangeStateCommand');
        return new ChangeStateCommand(
          { action: 'APPROVE' } as ChangeStateDto,
          event.loanId,
        );
      }),
      catchError((error) => {
        return error;        
      }),
    );
  };
}
