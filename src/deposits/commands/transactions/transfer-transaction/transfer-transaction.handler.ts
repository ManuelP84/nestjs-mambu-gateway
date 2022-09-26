import { BadRequestException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { getHeaders } from '../../../../common/helpers';
import { AxiosAdapter } from '../../../../common/providers/axios.adapter';
import { MakeTransferCommand } from './transfer-transaction.command';
import { ResponseTransferDto } from '../../../dto';

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
    const { transferTransactionDto, transferAccount } = command;
    const headers = getHeaders(this.configService);

    const transferResponse = await this.axios.post<ResponseTransferDto>(
      `${this.configService.get(
        'urlDeposits',
      )}${transferAccount}/transfer-transactions`,
      transferTransactionDto,
      {
        headers,
        baseURL: this.configService.get('baseUrl'),
      },
    );

    if (!transferResponse.encodedKey) {
      throw new BadRequestException(
        'Something went wrong - (create transfer account)',
      );
    }

    logger.log(`Successful transfer of ${transferResponse.amount}$ from the account`);
  }
}
