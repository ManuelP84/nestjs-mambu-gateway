import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ConfigService } from '@nestjs/config';
import { ResponseClientDto } from '../dto';
import { AxiosAdapter } from '../../common/providers/axios.adapter';
import { GetClientsQuery } from './get-clients.query';

@QueryHandler(GetClientsQuery)
export class GetClientsHandler implements IQueryHandler<GetClientsQuery> {
  constructor(
    private readonly configService: ConfigService,
    private readonly axios: AxiosAdapter,
  ) {}

  async execute(): Promise<ResponseClientDto[]> {
    const headers = {
      apikey: this.configService.get('apyKey'),
      'Content-Type': 'application/json',
    };
    const data = await this.axios.get<ResponseClientDto[]>(
      this.configService.get('url'),
      {
        headers,
        baseURL: this.configService.get('baseUrl'),
      },
    );

    return data;
  }
}
