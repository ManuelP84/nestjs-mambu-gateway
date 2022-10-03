import { IEvent } from '@nestjs/cqrs';

import { ResponseDepositDto } from '../../dto';

export class DepositCreatedEvent implements IEvent{
  constructor(public readonly depositResponse: ResponseDepositDto) {}
}
