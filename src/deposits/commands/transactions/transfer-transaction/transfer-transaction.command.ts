import { TransferTransactionDto } from '../../../dto';
export class TransferTransactionCommand {
    constructor(public readonly transferTransactionDto: TransferTransactionDto){}
}