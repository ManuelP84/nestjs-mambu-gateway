import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ClientCreatedEvent } from './client-created.event';
import { ClientCreatedRepository } from '../database/client.repository';

@EventsHandler(ClientCreatedEvent)
export class ClientCreatedHandler implements IEventHandler<ClientCreatedEvent> {

  constructor(
    private readonly clientCreatedRepository: ClientCreatedRepository
  ){}
  async handle(clientCreatedEvent: ClientCreatedEvent) {
    const { clientId, clientName, clientLastName } = clientCreatedEvent;
    console.log('ClientCreated:', clientId);
    await this.clientCreatedRepository.create(clientCreatedEvent);
  }
}
