import { WithdrawalTransactionDto } from '../../../dto';
export class WithdrawalTransactionCommand {
    constructor(public readonly withdrawalTransactionDto: WithdrawalTransactionDto){}
}