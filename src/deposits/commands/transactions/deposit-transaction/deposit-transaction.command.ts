import { DepositTransactionDto } from '../../../dto';
export class DepositTransactionCommand {
    constructor(public readonly depositTransactionDto: DepositTransactionDto){}
}