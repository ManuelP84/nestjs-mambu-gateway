import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ClientCreatedEvent } from './client-created.event';
import { ClientCreatedRepository } from '../../database/client.repository';
import { ClientCreated } from '../../entities/event/client-created.event';

@EventsHandler(ClientCreatedEvent)
export class ClientCreatedHandler implements IEventHandler<ClientCreatedEvent> {

  constructor(
    private readonly clientCreatedRepository: ClientCreatedRepository
  ){}
  async handle(clientCreatedEvent: ClientCreatedEvent) {
    console.log('ClientCreated:', clientCreatedEvent.clientId);
    const clientCreated = await this.clientCreatedRepository.create(clientCreatedEvent as ClientCreated); 
    console.log(clientCreated);
      
  }
}
