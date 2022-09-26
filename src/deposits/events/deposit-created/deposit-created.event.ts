import { ResponseDepositDto } from '../../dto';

export class DepositCreatedEvent {
  constructor(public readonly depositResponse: ResponseDepositDto) {}
}
