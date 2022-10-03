import { IEvent } from '@nestjs/cqrs';
import { ClientDataTest } from '../../../clients/interfaces';
import { TransferTransactionDto } from '../../dto';

export class CreateTransferEvent implements IEvent{
  constructor(
    public readonly createTransferDto: TransferTransactionDto,
    public readonly fromAccount: string,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
