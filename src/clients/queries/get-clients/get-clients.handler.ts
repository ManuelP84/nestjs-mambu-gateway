import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ConfigService } from '@nestjs/config';
import { ResponseClientDto } from '../../dto';
import { AxiosAdapter } from '../../../common/providers/axios.adapter';
import { GetClientsQuery } from './get-clients.query';
import { getHeaders } from '../../../common/helpers';

@QueryHandler(GetClientsQuery)
export class GetClientsHandler implements IQueryHandler<GetClientsQuery> {
  constructor(
    private readonly configService: ConfigService,
    private readonly axios: AxiosAdapter,
  ) {}

  async execute(): Promise<ResponseClientDto[]> {
    const headers = getHeaders(this.configService);
    const data = await this.axios.get<ResponseClientDto[]>(
      this.configService.get('urlClients'),
      {
        headers,
        baseURL: this.configService.get('baseUrl'),
      },
    );

    return data;
  }
}
