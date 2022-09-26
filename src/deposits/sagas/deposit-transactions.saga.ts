import { delay, map, Observable } from 'rxjs';
import { Injectable } from "@nestjs/common";
import { Saga, ICommand, ofType } from '@nestjs/cqrs';

import { CreateClientEvent } from "../../clients/events";
import { CreateClientCommand } from '../../clients/commands';
import { CreateDepositAccountEvent } from "../events/create-deposit-account/create-deposit-account.event";
import { CreateDepositAccountCommand, MakeDepositCommand, MakeWithdrawalCommand } from "../commands";
import { CreateDepositEvent, CreateWithdrawalEvent } from "../events";

@Injectable()
export class DepositTransactionSagas {
    @Saga()
    createClient = (events$: Observable<CreateClientEvent>): Observable<ICommand> => {
        return events$.pipe(
            delay(1000),            
            ofType(CreateClientEvent),
            map((event) => new CreateClientCommand(event.createClientDto, event.data)),
        )
    } 

    @Saga()
    createDepositAccount = (events$: Observable<CreateDepositAccountEvent>): Observable<ICommand> => {
        return events$.pipe(
            delay(2000),    
            ofType(CreateDepositAccountEvent),
            map((event) => new CreateDepositAccountCommand(event.createDepositAccountDto, event.data)),
        )
    } 

    @Saga()
    makeDeposit = (events$: Observable<CreateDepositEvent>): Observable<ICommand> => {
        return events$.pipe(
            delay(2000),    
            ofType(CreateDepositEvent),
            map((event) => new MakeDepositCommand(event.createDepositInfoDto, event.destinyAccount, event.data)),
        )        
    }

    @Saga()
    makeWithdrawal = (events$: Observable<CreateWithdrawalEvent>): Observable<ICommand> => {
        return events$.pipe(
            delay(2000),    
            ofType(CreateWithdrawalEvent),
            map((event) => new MakeWithdrawalCommand(event.createWithdrawalDto, event.destinyAccount, event.data)),
        )        
    }
}