import { v4 as uuid } from 'uuid';
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
    const createClientInfoUpdated = {
      ...createClientDto,
      _personalizados: {
        External_ID: uuid()
      }
    }
    const headers = getHeaders(this.configService);
    const clientResponse = await this.axios.post<ResponseClientDto>(
      this.configService.get('urlClients'),
      createClientInfoUpdated,
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

    // const {
    //   transferInfo: { transferDetails },
    // } = data;
    // const transferDetailsUpdated = {
    //   ...transferDetails,
    //   linkedAccountId: clientResponse.id,
    //   linkedAccountKey: clientResponse.encodedKey,
    // };
    // const transferInfoUpdated = {
    //   ...transferInfo,
    //   transferDetails: transferDetailsUpdated,
    // };

    // const restInfoUpdated = {
    //   ...restInfo,
    //   transferInfo: transferInfoUpdated,
    // };

    logger.log('Client created event published');
    this.eventBus.publish(new ClientCreatedEvent(clientResponse));

    logger.log('Create deposit account event published');
    this.eventBus.publish(
      new CreateDepositAccountEvent(accountInfoUpdated, restInfo),
    );
  }
}
