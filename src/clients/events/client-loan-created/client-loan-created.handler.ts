import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ClientLoanCreatedEvent } from './client-loan-created.event';

@EventsHandler(ClientLoanCreatedEvent)
export class ClientLoanCreatedHandler
  implements IEventHandler<ClientLoanCreatedEvent>
{
  handle(event: ClientLoanCreatedEvent) {    
    console.log(`Loan ${event.productName} assigned to client with id: ${event.clientId}`);
  }
}
