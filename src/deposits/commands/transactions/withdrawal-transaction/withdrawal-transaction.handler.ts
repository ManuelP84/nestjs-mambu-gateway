import { v4 as uuid } from 'uuid';
import { BadRequestException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';

import { getHeaders } from '../../../../common/helpers';
import { AxiosAdapter } from '../../../../common/providers/axios.adapter';
import { MakeWithdrawalCommand } from './withdrawal-transaction.command';
import { ResponseWithdrawalDto } from '../../../dto';
import { WithdrawalCreatedEvent } from '../../../events';

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
    const { withdrawalTransactionDto, destinyAccount } = command;
    const headers = getHeaders(this.configService);
    const withdrawalTransactionDtoUpdated = {
      ...withdrawalTransactionDto,
      externalId: uuid(),
    }

    const withdrawalResponse = await this.axios.post<ResponseWithdrawalDto>(
      `${this.configService.get(
        'urlDeposits',
      )}${destinyAccount}/withdrawal-transactions`,
      withdrawalTransactionDtoUpdated,
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

    logger.log(`Successful withdrawal of ${withdrawalResponse.amount}$ from the account`);
    this.eventBus.publish(new WithdrawalCreatedEvent(withdrawalResponse));    
  }
}
