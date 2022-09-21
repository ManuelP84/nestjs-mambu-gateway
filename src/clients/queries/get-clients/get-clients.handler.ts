import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ConfigService } from '@nestjs/config';

import { ResponseClientDto } from '../../dto';
import { AxiosAdapter } from '../../../common/providers/axios.adapter';
import { GetClientsQuery } from './get-clients.query';
import { getHeaders } from '../../../common/helpers';
import { Logger } from '@nestjs/common';

@QueryHandler(GetClientsQuery)
export class GetClientsHandler implements IQueryHandler<GetClientsQuery> {
  constructor(
    private readonly configService: ConfigService,
    private readonly axios: AxiosAdapter,
  ) {}

  async execute(): Promise<ResponseClientDto[]> {
    const logger = new Logger(GetClientsHandler.name);
    const headers = getHeaders(this.configService);
    const data = await this.axios.get<ResponseClientDto[]>(
      this.configService.get('urlClients'),
      {
        headers,
        baseURL: this.configService.get('baseUrl'),
      },
    );
    logger.log('Retriving all the clients...')
    
    return data;
  }
}
