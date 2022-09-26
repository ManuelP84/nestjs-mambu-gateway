import { BadRequestException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';

import { getHeaders } from '../../../../common/helpers';
import { MakeDepositCommand } from '../../transactions/deposit-transaction/deposit-transaction.command';
import { AxiosAdapter } from '../../../../common/providers/axios.adapter';
import { ResponseDepositDto } from '../../../dto';

@CommandHandler(MakeDepositCommand)
export class DepositTransactionHandler implements ICommandHandler {
  constructor(
    public readonly configService: ConfigService,
    private readonly axios: AxiosAdapter,
    private readonly eventBus: EventBus,
  ) {}
  async execute(command: MakeDepositCommand): Promise<any> {
    const logger = new Logger(DepositTransactionHandler.name);
    logger.log('Making a deposit...');
    const { depositTransactionDto, data, destinyAccount } = command;
    const { withdrawalInfo, ...restInfo } = data;
    const headers = getHeaders(this.configService);

    const depositResponse = await this.axios.post<ResponseDepositDto>(
      `${this.configService.get('urlDeposits')}${destinyAccount}/deposit-transactions`,
      depositTransactionDto,
      {
        headers,
        baseURL: this.configService.get('baseUrl'),
      },
    );

    console.log(depositResponse);    

    if (!depositResponse.encodedKey) {
        throw new BadRequestException(
          'Something went wrong - (create deposit account)',
        );
      }

  }
}
