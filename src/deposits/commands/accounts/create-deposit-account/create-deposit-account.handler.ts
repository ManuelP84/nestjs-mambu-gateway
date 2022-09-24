import { ConfigService } from '@nestjs/config';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AxiosAdapter } from '../../../../common/providers/axios.adapter';
import { CreateDepositAccountCommand } from './created-deposit-account.command';
import { ResponseDepositAccountDto } from '../../../dto/response-deposit-account.dto';
import { Logger } from '@nestjs/common';
import { getHeaders } from '../../../../common/helpers/get-headers.helper';

@CommandHandler(CreateDepositAccountCommand)
export class CreateDepositAccountHandler implements ICommandHandler {
  constructor(
    public readonly configService: ConfigService,
    private readonly axios: AxiosAdapter,
    private readonly eventPublisher: EventPublisher,
  ) {}
  async execute(command: CreateDepositAccountCommand): Promise<ResponseDepositAccountDto> {
    const logger = new Logger(CreateDepositAccountHandler.name);
    logger.log('Creating a new client...');
    const { createDepositAccountDto } = command;
    const headers = getHeaders(this.configService);
    const data = await this.axios.post<ResponseDepositAccountDto>(
        this.configService.get('urlDeposits'),
        createDepositAccountDto,
        {
          headers,
          baseURL: this.configService.get('baseUrl'),
        },
      );
    return;
  }
}
