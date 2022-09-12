import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ClientCreatedEvent } from './client-created.event';

@EventsHandler(ClientCreatedEvent)
export class ClientCreatedHandler implements IEventHandler<ClientCreatedEvent> {
  handle(clientCreatedEvent: ClientCreatedEvent) {
    const { clientId } = clientCreatedEvent;
    console.log('ClientCreated:', clientId);
  }
}
