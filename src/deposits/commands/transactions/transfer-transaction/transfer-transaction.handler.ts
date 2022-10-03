import { BadRequestException, HttpStatus, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';

import { getHeaders } from '../../../../common/helpers';
import { AxiosAdapter } from '../../../../common/providers/axios.adapter';
import { MakeTransferCommand } from './transfer-transaction.command';
import { ResponseTransferDto } from '../../../dto';
import { getTransferFromAccountTest } from '../../../helpers';
import { TransferCreatedEvent } from '../../../events';
import { Flags } from '../../../../common/enums';
import { HttpExceptionEvent, HttpStatusEvent } from '../../../../common/events';

@CommandHandler(MakeTransferCommand)
export class TransferTransactionHandler implements ICommandHandler {
  constructor(
    public readonly configService: ConfigService,
    private readonly axios: AxiosAdapter,
    private readonly eventBus: EventBus,
  ) {}
  async execute(command: MakeTransferCommand): Promise<void> {
    const logger = new Logger(TransferTransactionHandler.name);
    logger.log('Making a transfer...');
    const { transferTransactionDto, data, flag } = command;
    const headers = getHeaders(this.configService);

    try {
      if (flag === Flags.TEST) {
        transferTransactionDto.transferDetails.linkedAccountId =
          data.linkedAccountId;
        transferTransactionDto.transferDetails.linkedAccountKey =
          data.linkedAccountKey;
      }

      const transferResponse = await this.axios.post<ResponseTransferDto>(
        `${this.configService.get(
          'urlDeposits',
        )}${getTransferFromAccountTest()}/transfer-transactions`,
        transferTransactionDto,
        {
          headers,
          baseURL: this.configService.get('baseUrl'),
        },
      );

      this.eventBus.publishAll([
        new TransferCreatedEvent(transferResponse),
        //new HttpStatusEvent(HttpStatus.CREATED),
      ]);
      logger.log(
        `Successful transfer of ${transferResponse.amount}$ from the account`,
      );
    } catch (error) {
      this.eventBus.publish(new HttpExceptionEvent(new BadRequestException()));
    }
  }
}
