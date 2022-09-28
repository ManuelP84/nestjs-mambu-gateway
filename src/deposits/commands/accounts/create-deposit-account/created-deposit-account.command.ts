import { ClientDataTest } from '../../../../clients/interfaces';
import { CreateDepositAccountDto } from '../../../dto';

export class CreateDepositAccountCommand {
  constructor(
    public readonly createDepositAccountDto: CreateDepositAccountDto,
    public readonly flag?: string,
    public readonly data?: ClientDataTest,
  ) {}
}
