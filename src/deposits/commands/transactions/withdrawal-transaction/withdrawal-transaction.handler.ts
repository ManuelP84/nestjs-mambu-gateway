import { BadRequestException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { getHeaders } from '../../../../common/helpers';

import { AxiosAdapter } from '../../../../common/providers/axios.adapter';
import { MakeWithdrawalCommand } from './withdrawal-transaction.command';
import { ResponseWithdrawalDto } from '../../../dto';

@CommandHandler(MakeWithdrawalCommand)
export class WithdrawalTransactionHandler implements ICommandHandler {
    constructor(
        public readonly configService: ConfigService,
        private readonly axios: AxiosAdapter,
        private readonly eventBus: EventBus,
      ) {}
  async execute(command: MakeWithdrawalCommand): Promise<void> {
    const logger = new Logger(WithdrawalTransactionHandler.name);
    logger.log('Making a withdrawal...');
    const { withdrawalTransactionDto, data, destinyAccount } = command;
    const { transferInfo, ...restInfo } = data;
    const headers = getHeaders(this.configService);

    const withdrawalResponse = await this.axios.post<ResponseWithdrawalDto>(
        `${this.configService.get(
          'urlDeposits',
        )}${destinyAccount}/withdrawal-transactions`,
        withdrawalTransactionDto,
        {
          headers,
          baseURL: this.configService.get('baseUrl'),
        },
      );

      if (!withdrawalResponse.encodedKey) {
        throw new BadRequestException(
          'Something went wrong - (create withdrawal account)',
        );
      }
  }
}
