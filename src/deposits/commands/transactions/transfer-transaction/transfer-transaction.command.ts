import { ICommand } from '@nestjs/cqrs';

import { ClientDataTest } from '../../../../clients/interfaces';
import { TransferTransactionDto } from '../../../dto';

export class MakeTransferCommand implements ICommand{
  constructor(
    public readonly transferTransactionDto: TransferTransactionDto,
    public readonly fromAccount: string,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
