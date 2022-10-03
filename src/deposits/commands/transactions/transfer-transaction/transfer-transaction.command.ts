import { ClientDataTest } from '../../../../clients/interfaces';
import { TransferTransactionDto } from '../../../dto';
import { ICommand } from '@nestjs/cqrs';

export class MakeTransferCommand implements ICommand{
  constructor(
    public readonly transferTransactionDto: TransferTransactionDto,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
