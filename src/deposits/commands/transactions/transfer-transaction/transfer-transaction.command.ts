import { TransferTransactionDto } from '../../../dto';

export class MakeTransferCommand {
    constructor(
        public readonly transferTransactionDto: TransferTransactionDto,
        public readonly transferAccount: string,
        ){}
}