import { ResponseWithdrawalDto } from '../../dto/response-withdrawal.dto';

export class WithdrawalCreatedEvent {
    constructor(
        public readonly withdrawalResponse: ResponseWithdrawalDto,
    ){}
}