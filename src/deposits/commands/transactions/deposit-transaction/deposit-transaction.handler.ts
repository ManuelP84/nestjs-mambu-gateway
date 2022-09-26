import { BadRequestException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';

import { getHeaders } from '../../../../common/helpers';
import { MakeDepositCommand } from '../../transactions/deposit-transaction/deposit-transaction.command';
import { AxiosAdapter } from '../../../../common/providers/axios.adapter';
import { ResponseDepositDto } from '../../../dto';
import { DepositCreatedEvent, CreateWithdrawalEvent } from '../../../events';

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
    const { depositTransactionDto, data, destinyAccount } = command;
    const { withdrawalInfo, ...restInfo } = data;
    const headers = getHeaders(this.configService);

    const depositResponse = await this.axios.post<ResponseDepositDto>(
      `${this.configService.get(
        'urlDeposits',
      )}${destinyAccount}/deposit-transactions`,
      depositTransactionDto,
      {
        headers,
        baseURL: this.configService.get('baseUrl'),
      },
    );

    if (!depositResponse.encodedKey) {
      throw new BadRequestException(
        'Something went wrong - (create deposit account)',
      );
    }

    logger.log(`Deposit ${depositResponse.amount}$ successfully to the account`);
    this.eventBus.publish(
      new DepositCreatedEvent(depositResponse),
    );
    
    logger.log('Create withdrawal event published');
    this.eventBus.publish(new CreateWithdrawalEvent(withdrawalInfo, destinyAccount, restInfo));
  }
}
