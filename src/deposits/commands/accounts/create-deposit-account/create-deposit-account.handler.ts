import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';

import { AxiosAdapter } from '../../../../common/providers/axios.adapter';
import { CreateDepositAccountCommand } from './created-deposit-account.command';
import { DepositAccountResponseDto } from '../../../dto';
import { getHeaders } from '../../../../common/helpers';
import { getDepositTest } from '../../../helpers';
import {
  CreateDepositEvent,
  DepositAccountCreatedEvent,
} from '../../../events';

@CommandHandler(CreateDepositAccountCommand)
export class CreateDepositAccountHandler implements ICommandHandler {
  constructor(
    public readonly configService: ConfigService,
    private readonly axios: AxiosAdapter,
    private readonly eventBus: EventBus,
  ) {}
  async execute(command: CreateDepositAccountCommand): Promise<void> {
    const logger = new Logger(CreateDepositAccountHandler.name);
    logger.log('Creating new deposit account...');
    const { createDepositAccountDto, data, flag } = command;
    const headers = getHeaders(this.configService);

    if (flag === 'TEST') {
      createDepositAccountDto.accountHolderKey = data.clientEncodekey;
    }

    const depositAccountResponse =
      await this.axios.post<DepositAccountResponseDto>(
        this.configService.get('urlDeposits'),
        createDepositAccountDto,
        {
          headers,
          baseURL: this.configService.get('baseUrl'),
        },
      );

    this.eventBus.publish(
      new DepositAccountCreatedEvent(depositAccountResponse),
    );
    logger.log(`Deposit account :: ${depositAccountResponse.id} created`);

    if (flag === 'TEST') {
      data.linkedAccountId = depositAccountResponse.id;
      data.linkedAccountKey = depositAccountResponse.encodedKey;
      this.eventBus.publish(
        new CreateDepositEvent(getDepositTest(), 'TEST', data),
      );
    }
  }
}
