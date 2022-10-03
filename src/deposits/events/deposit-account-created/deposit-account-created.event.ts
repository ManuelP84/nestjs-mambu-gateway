import { IEvent } from '@nestjs/cqrs';

import { DepositAccountResponseDto } from '../../dto/responses/response-deposit-account.dto';

export class DepositAccountCreatedEvent implements IEvent{
  constructor(
    public readonly depositAccountResponse: DepositAccountResponseDto,
  ) {}
}
