import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

import { CreateClientCommand } from './create-client.command';
import { ResponseClientDto } from '../../dto';
import { AxiosAdapter } from '../../../common/providers/axios.adapter';
import { getHeaders } from '../../../common/helpers';
import { ClientCreatedEvent } from '../../events';
import { CreateDepositAccountEvent } from '../../../deposits/events';
import { getAccountTest } from '../../../deposits/helpers';

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
    const { createClientDto, flag } = command;

    const headers = getHeaders(this.configService);
    const clientResponse = await this.axios.post<ResponseClientDto>(
      this.configService.get('urlClients'),
      createClientDto,
      {
        headers,
        baseURL: this.configService.get('baseUrl'),
      },
    );

    this.eventBus.publish(new ClientCreatedEvent(clientResponse));

    if(flag === 'TEST'){
      const data = {
        clietnId: clientResponse.id,
        clientEncodekey: clientResponse.encodedKey,
      };
      this.eventBus.publish(
        new CreateDepositAccountEvent(getAccountTest(), 'TEST', data),
      );
    }
  }
}
