import { CommandHandler, EventBus, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

import { CreateClientCommand } from './create-client.command';
import { ResponseClientDto } from '../../dto';
import { AxiosAdapter } from '../../../common/providers/axios.adapter';
import { Client } from '../../entities/client/client.entity';
import { getHeaders } from '../../../common/helpers';
import { ClientCreatedEvent } from '../../events/client-created/client-created.event';

@CommandHandler(CreateClientCommand)
export class CreateClientHandler implements ICommandHandler {
  constructor(
    public readonly configService: ConfigService,
    private readonly axios: AxiosAdapter,
    private readonly eventPublisher: EventPublisher,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateClientCommand): Promise<void> {
    const logger = new Logger(CreateClientHandler.name);
    logger.log('Creating a new client...');
    const { createClientDto, data } = command;
    const headers = getHeaders(this.configService);
    const clientResponse = await this.axios.post<ResponseClientDto>(
      this.configService.get('urlClients'),
      createClientDto,
      {
        headers,
        baseURL: this.configService.get('baseUrl'),
      },
    );

    console.log(clientResponse);
    

    if(!!clientResponse.encodedKey){
      console.log("New publisher!!!");
      
      this.eventBus.publish(new ClientCreatedEvent(clientResponse, data));
    }

    // TODO: Cambiar el factory y emitir eventos manualmente
    // TODO: Crear DTO con toda la info cliente- deposito- retiro...

    // const client = this.eventPublisher.mergeObjectContext(
    //   this.clientFactory.create(data),
    // );

    // client.commit();

    // return data;
  }
}
