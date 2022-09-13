import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ClientCreatedEvent } from './client-created.event';
import { ClientCreatedRepository } from '../../database/client.repository';
import { ClientCreated } from '../../entities/event/client-created.entity';
import { Logger } from '@nestjs/common';

@EventsHandler(ClientCreatedEvent)
export class ClientCreatedHandler implements IEventHandler<ClientCreatedEvent> {
  constructor(
    private readonly clientCreatedRepository: ClientCreatedRepository,
  ) {}
  async handle(event: ClientCreatedEvent) {
    const logger = new Logger(ClientCreatedHandler.name);
    logger.log(
      `Client: ${event.clientName} ${event.clientLastName} :: Id: ${event.clientId} created`,
    );
    await this.clientCreatedRepository.create(event as ClientCreated,);
  }
}
