import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { ConfigService } from '@nestjs/config';
import { Logger, BadRequestException } from '@nestjs/common';

import { CreateClientCommand } from './create-client.command';
import { ResponseClientDto } from '../../dto';
import { AxiosAdapter } from '../../../common/providers/axios.adapter';
import { getHeaders } from '../../../common/helpers';
import { ClientCreatedEvent } from '../../events/client-created/client-created.event';
import { CreateDepositAccountEvent } from '../../../deposits/events';

@CommandHandler(CreateClientCommand)
export class CreateClientHandler implements ICommandHandler {
  constructor(
    public readonly configService: ConfigService,
    private readonly axios: AxiosAdapter,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateClientCommand): Promise<void> {
    const logger = new Logger(CreateClientHandler.name);
    logger.log('Creating a new client...');
    const { createClientDto, data } = command;
    const { accountInfo, ...restInfo } = data;
    const headers = getHeaders(this.configService);
    const clientResponse = await this.axios.post<ResponseClientDto>(
      this.configService.get('urlClients'),
      createClientDto,
      {
        headers,
        baseURL: this.configService.get('baseUrl'),
      },
    );

    if (!clientResponse.encodedKey) {
      throw new BadRequestException('Something went wrong - (create client)');
    }

    const accountInfoUpdated = {
      ...accountInfo,
      accountHolderKey: clientResponse.encodedKey,
    };
    logger.log('Client created event published');
    this.eventBus.publish(new ClientCreatedEvent(clientResponse));

    logger.log('Create deposit account event published');
    this.eventBus.publish(
      new CreateDepositAccountEvent(accountInfoUpdated, restInfo),
    );
  }
}
