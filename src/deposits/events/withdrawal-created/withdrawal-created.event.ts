import { IEvent } from '@nestjs/cqrs';

import { ResponseWithdrawalDto } from '../../dto/responses/response-withdrawal.dto';

export class WithdrawalCreatedEvent implements IEvent{
    constructor(
        public readonly withdrawalResponse: ResponseWithdrawalDto,
    ){}
}