import { TransferTransactionDto } from '../../dto';

export class CreateTransferEvent {
  constructor(
    public readonly createTransferDto: TransferTransactionDto,
    public readonly destinyAccount: string,
  ) {}
}
