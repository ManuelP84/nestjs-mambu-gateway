import { DepositAccountResponseDto } from '../../dto/responses/response-deposit-account.dto';

export class DepositAccountCreatedEvent {
  constructor(
    public readonly depositAccountResponse: DepositAccountResponseDto,
  ) {}
}
