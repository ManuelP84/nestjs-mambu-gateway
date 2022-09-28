import { ClientDataTest } from '../../../../clients/interfaces';
import { TransferTransactionDto } from '../../../dto';

export class MakeTransferCommand {
  constructor(
    public readonly transferTransactionDto: TransferTransactionDto,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
