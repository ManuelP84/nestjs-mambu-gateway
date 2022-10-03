import { BadRequestException, HttpStatus, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';

import { getHeaders } from '../../../../common/helpers';
import { MakeDepositCommand } from '../../transactions/deposit-transaction/deposit-transaction.command';
import { AxiosAdapter } from '../../../../common/providers/axios.adapter';
import { ResponseDepositDto } from '../../../dto';
import { getTransferTest, getWithdrawalTest } from '../../../helpers';
import {
  DepositCreatedEvent,
  CreateWithdrawalEvent,
  CreateTransferEvent,
} from '../../../events';
import { Flags } from '../../../../common/enums';
import { HttpExceptionEvent, HttpStatusEvent } from 'src/common/events';
import { getTransferFromAccountTest } from '../../../helpers/get-transfer-from-account-test.helper';

@CommandHandler(MakeDepositCommand)
export class DepositTransactionHandler implements ICommandHandler {
  constructor(
    public readonly configService: ConfigService,
    private readonly axios: AxiosAdapter,
    private readonly eventBus: EventBus,
  ) {}
  async execute(command: MakeDepositCommand): Promise<void> {
    const logger = new Logger(DepositTransactionHandler.name);
    logger.log('Making a deposit...');
    const { depositTransactionDto, fromAccount, data, flag } = command;
    const headers = getHeaders(this.configService);

    try {
      const depositResponse = await this.axios.post<ResponseDepositDto>(
        `${this.configService.get('urlDeposits')}${
          fromAccount
        }/deposit-transactions`,
        depositTransactionDto,
        {
          headers,
          baseURL: this.configService.get('baseUrl'),
        },
      );

      this.eventBus.publish(new DepositCreatedEvent(depositResponse));
      logger.log(
        `Deposit successful :: ${depositResponse.amount}$ to the account`,
      );

      if (flag === Flags.TEST) {
        this.eventBus.publishAll([
          new CreateWithdrawalEvent(getWithdrawalTest(), fromAccount, Flags.TEST, data),
          new CreateTransferEvent(getTransferTest(), getTransferFromAccountTest(), Flags.TEST, data),
        ]);
      } else {
        this.eventBus.publish(new HttpStatusEvent(HttpStatus.CREATED));
      }
    } catch (error) {
      this.eventBus.publish(new HttpExceptionEvent(new BadRequestException()));
    }
  }
}
