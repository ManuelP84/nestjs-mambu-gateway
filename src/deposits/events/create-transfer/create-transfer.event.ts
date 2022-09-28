import { ClientDataTest } from '../../../clients/interfaces';
import { TransferTransactionDto } from '../../dto';

export class CreateTransferEvent {
  constructor(
    public readonly createTransferDto: TransferTransactionDto,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
