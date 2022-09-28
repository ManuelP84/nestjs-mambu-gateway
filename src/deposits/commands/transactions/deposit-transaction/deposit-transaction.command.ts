import { ClientDataTest } from '../../../../clients/interfaces';
import { DepositTransactionDto } from '../../../dto';

export class MakeDepositCommand {
  constructor(
    public readonly depositTransactionDto: DepositTransactionDto,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
