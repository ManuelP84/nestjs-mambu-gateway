import { ResponseClientDto } from '../../dto/response-client.dto';
export class ClientCreatedEvent {
  constructor(
    public readonly clientResponse: ResponseClientDto,
  ) {}
}
