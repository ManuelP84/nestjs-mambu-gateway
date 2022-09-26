import { v4 as uuid } from 'uuid';
import { ConfigService } from '@nestjs/config';
import { Logger, BadRequestException } from '@nestjs/common';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';

import { AxiosAdapter } from '../../../../common/providers/axios.adapter';
import { CreateDepositAccountCommand } from './created-deposit-account.command';
import { DepositAccountResponseDto } from '../../../dto';
import { getHeaders } from '../../../../common/helpers/get-headers.helper';
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
    const { createDepositAccountDto, data } = command;
    const { depositInfo, transferInfo, ...restInfo } = data;
    const headers = getHeaders(this.configService);

    const depositAccountResponse =
      await this.axios.post<DepositAccountResponseDto>(
        this.configService.get('urlDeposits'),
        createDepositAccountDto,
        {
          headers,
          baseURL: this.configService.get('baseUrl'),
        },
      );

    if (!depositAccountResponse.encodedKey) {
      throw new BadRequestException(
        'Something went wrong - (create deposit account)',
      );
    }

    const {
      transferInfo: { transferDetails },
    } = data;
    const transferDetailsUpdated = {
      ...transferDetails,
      linkedAccountId: depositAccountResponse.id,
      linkedAccountKey: depositAccountResponse.encodedKey,
    };
    const transferInfoUpdated = {
      ...transferInfo,
      transferDetails: transferDetailsUpdated,
      externalId: uuid(),
    };

    const restInfoUpdated = {
      ...restInfo,
      transferInfo: transferInfoUpdated,
    };

    logger.log('Deposit account created event published');
    this.eventBus.publish(
      new DepositAccountCreatedEvent(depositAccountResponse),
    );

    const destityAccount = depositAccountResponse.id;
    logger.log('Create deposit event published');
    this.eventBus.publish(
      new CreateDepositEvent(depositInfo, destityAccount, restInfoUpdated),
    );
  }
}
