import { ClientDataTest } from '../../../clients/interfaces';
import {
  DepositTransactionDto,
} from '../../dto';

export class CreateDepositEvent {
  constructor(
    public readonly createDepositInfoDto: DepositTransactionDto,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
