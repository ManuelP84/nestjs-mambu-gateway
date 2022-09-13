import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ClientLoanCreatedEvent } from './client-loan-created.event';
import { Logger } from '@nestjs/common';

@EventsHandler(ClientLoanCreatedEvent)
export class ClientLoanCreatedHandler
  implements IEventHandler<ClientLoanCreatedEvent>
{
  handle(event: ClientLoanCreatedEvent) { 
    const logger = new Logger(ClientLoanCreatedEvent.name);   
    logger.log(`Loan: ${event.productName} :: Client with id: ${event.clientId}`)
  }
}
