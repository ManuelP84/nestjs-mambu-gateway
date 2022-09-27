import { ResponseWithdrawalDto } from '../../dto/responses/response-withdrawal.dto';

export class WithdrawalCreatedEvent {
    constructor(
        public readonly withdrawalResponse: ResponseWithdrawalDto,
    ){}
}