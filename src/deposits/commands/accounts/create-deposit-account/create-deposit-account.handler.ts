import { ConfigService } from '@nestjs/config';
import { BadRequestException, HttpStatus, Logger } from '@nestjs/common';
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
import { Flags } from '../../../../common/enums';
import { HttpExceptionEvent, HttpStatusEvent } from 'src/common/events';
import { getTransferFromAccountTest } from '../../../helpers/get-transfer-from-account-test.helper';

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

    try {
      if (flag === Flags.TEST) {
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

      if (flag === Flags.TEST) {
        data.linkedAccountKey = depositAccountResponse.encodedKey;
        this.eventBus.publish(
          new CreateDepositEvent(
            getDepositTest(),
            depositAccountResponse.id,
            Flags.TEST,
            data,
          ),
        );
      } else {
        this.eventBus.publish(new HttpStatusEvent(HttpStatus.CREATED));
      }
    } catch (error) {
      this.eventBus.publish(new HttpExceptionEvent(new BadRequestException()));
    }
  }
}
