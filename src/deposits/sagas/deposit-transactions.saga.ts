import { Injectable } from "@nestjs/common";
import { Saga, ICommand, ofType } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';
import { CreateClientEvent } from "../../clients/events";
import { CreateClientCommand } from '../../clients/commands';

@Injectable()
export class DepositTransactionSagas {
    @Saga()
    createdClient = (events$: Observable<CreateClientEvent>): Observable<ICommand> => {
        return events$.pipe(
            ofType(CreateClientEvent),
            map((event) => new CreateClientCommand(event.createClientDto, event.data)),
        )
    } 
}