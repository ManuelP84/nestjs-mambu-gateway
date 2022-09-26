import { delay, map, Observable } from 'rxjs';
import { Injectable } from "@nestjs/common";
import { Saga, ICommand, ofType } from '@nestjs/cqrs';

import { CreateClientEvent } from "../../clients/events";
import { CreateClientCommand } from '../../clients/commands';
import { CreateDepositAccountEvent } from "../events/create-deposit-account/create-deposit-account.event";
import { CreateDepositAccountCommand, MakeDepositCommand } from "../commands";
import { CreateDepositEvent } from "../events";

@Injectable()
export class DepositTransactionSagas {
    @Saga()
    createClient = (events$: Observable<CreateClientEvent>): Observable<ICommand> => {
        return events$.pipe(
            delay(3000),            
            ofType(CreateClientEvent),
            map((event) => new CreateClientCommand(event.createClientDto, event.data)),
        )
    } 

    @Saga()
    createDepositAccount = (events$: Observable<CreateDepositAccountEvent>): Observable<ICommand> => {
        return events$.pipe(
            delay(3000),    
            ofType(CreateDepositAccountEvent),
            map((event) => new CreateDepositAccountCommand(event.createDepositAccountDto, event.data)),
        )
    } 

    @Saga()
    createDeposit = (events$: Observable<CreateDepositEvent>): Observable<ICommand> => {
        return events$.pipe(
            delay(3000),    
            ofType(CreateDepositEvent),
            map((event) => new MakeDepositCommand(event.createDepositInfoDto, event.destinyAccount, event.data)),
        )
    }
}