import { DepositAccountResponseDto } from '../../dto/response-deposit-account.dto';

export class DepositAccountCreatedEvent {
  constructor(
    public readonly depositAccountResponse: DepositAccountResponseDto,
  ) {}
}
