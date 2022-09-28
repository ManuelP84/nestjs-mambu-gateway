import { ClientDataTest } from '../../interfaces';
import { ResponseClientDto } from '../../dto/response-client.dto';
export class ClientCreatedEvent {
  constructor(
    public readonly clientResponse: ResponseClientDto,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
