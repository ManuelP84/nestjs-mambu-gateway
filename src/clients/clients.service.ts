import { Injectable } from '@nestjs/common';
import { ResponseClientDto, CreateClientDto } from './dto/';
import { AxiosAdapter } from '../common/providers/axios.adapter';
import { v4 as uuid } from 'uuid';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ClientsService {
  constructor(
    private readonly axios: AxiosAdapter,
    private readonly configService: ConfigService,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<ResponseClientDto> {
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

    return data;
  }

  async findAll(): Promise<ResponseClientDto[]> {
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

  // findOne(id: number) {
  //   return `This action returns a #${id} client`;
  // }

  // update(id: number, updateClientDto: UpdateClientDto) {
  //   return `This action updates a #${id} client`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} client`;
  // }
}
