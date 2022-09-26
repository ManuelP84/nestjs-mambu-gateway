import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { ClientCreatedEvent } from './client-created.event';
import { ClientCreatedRepository } from '../../database/client.repository';
import { ClientDocument } from '../../entities/event/client-created.entity';

@EventsHandler(ClientCreatedEvent)
export class ClientCreatedHandler implements IEventHandler<ClientCreatedEvent> {
  constructor(
    private readonly clientCreatedRepository: ClientCreatedRepository,
  ) {}
  async handle(event: ClientCreatedEvent) {
    const logger = new Logger(ClientCreatedHandler.name);
    logger.log(
      `Client: ${event.clientResponse.firstName} ${event.clientResponse.lastName} :: Id: ${event.clientResponse.encodedKey} created`,
    );

    const { encodedKey, firstName, lastName } = event.clientResponse;
            
    await this.clientCreatedRepository.create({
      encodedKey,
      firstName,
      lastName,
    } as ClientDocument,);
  }
}
