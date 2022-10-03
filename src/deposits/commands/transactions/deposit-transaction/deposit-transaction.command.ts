import { ICommand } from '@nestjs/cqrs';

import { ClientDataTest } from '../../../../clients/interfaces';
import { DepositTransactionDto } from '../../../dto';

export class MakeDepositCommand implements ICommand{
  constructor(
    public readonly depositTransactionDto: DepositTransactionDto,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
