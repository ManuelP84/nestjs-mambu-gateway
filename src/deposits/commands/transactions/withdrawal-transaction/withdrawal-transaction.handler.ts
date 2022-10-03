import { BadRequestException, HttpStatus, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';

import { getHeaders } from '../../../../common/helpers';
import { AxiosAdapter } from '../../../../common/providers/axios.adapter';
import { MakeWithdrawalCommand } from './withdrawal-transaction.command';
import { ResponseWithdrawalDto } from '../../../dto';
import { WithdrawalCreatedEvent } from '../../../events';
import { HttpExceptionEvent, HttpStatusEvent } from '../../../../common/events';

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
    const { withdrawalTransactionDto, fromAccount, data, flag } = command;
    const headers = getHeaders(this.configService);

    try {
      const withdrawalResponse = await this.axios.post<ResponseWithdrawalDto>(
        `${this.configService.get('urlDeposits')}${
          fromAccount
        }/withdrawal-transactions`,
        withdrawalTransactionDto,
        {
          headers,
          baseURL: this.configService.get('baseUrl'),
        },
      );

      this.eventBus.publishAll([
        new WithdrawalCreatedEvent(withdrawalResponse),
        new HttpStatusEvent(HttpStatus.CREATED),
      ]);
      logger.log(
        `Withdrawal successful :: ${withdrawalResponse.amount}$ from the account`,
      );
    } catch (error) {
      this.eventBus.publish(new HttpExceptionEvent(new BadRequestException()));
    }
  }
}
