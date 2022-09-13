import { ConfigService } from '@nestjs/config';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateClientCommand } from './create-client.command';
import { v4 as uuid } from 'uuid';
import { ResponseClientDto } from '../../dto';
import { AxiosAdapter } from '../../../common/providers/axios.adapter';
import { ClientFactory } from '../../factories/create-client.factory';

@CommandHandler(CreateClientCommand)
export class CreateClientHandler implements ICommandHandler {
  constructor(
    public readonly configService: ConfigService,
    private readonly axios: AxiosAdapter,
    private readonly eventPublisher: EventPublisher,
    private readonly clientFactory: ClientFactory,
  ) {}

  async execute(command: CreateClientCommand): Promise<void> {
    const { createClientDto } = command;
    const headers = {
      apikey: this.configService.get('apyKey'),
      Accept: 'application/vnd.mambu.v2+json',
      'Content-Type': 'application/json',
      'Idempotency-Key': uuid(),
    };

    const data = await this.axios.post<ResponseClientDto>(
      this.configService.get('url'),
      createClientDto,
      {
        headers,
        baseURL: this.configService.get('baseUrl'),
      },
    );

    const client = this.eventPublisher.mergeObjectContext(
      this.clientFactory.create(data),
    );

    client.commit();
  }
}
