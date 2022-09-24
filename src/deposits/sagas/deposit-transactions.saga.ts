import { Injectable } from "@nestjs/common";
import { Saga, ICommand, ofType } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';
import { ClientCreatedEvent } from "../../clients/events/client-created/client-created.event";

@Injectable()
export class DepositTransactionSagas {
    @Saga()
    createdClient = (events$: Observable<ClientCreatedEvent>): Observable<ICommand> => {
        return events$.pipe(
            ofType(ClientCreatedEvent),
            //map((event) => new CreateDepositAccountCommand()),
        )
    } 
}