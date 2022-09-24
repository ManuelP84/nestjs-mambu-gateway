import { CreateDepositAccountDto } from '../../../dto';
export class CreateDepositAccountCommand {
    constructor(public readonly createDepositAccountDto: CreateDepositAccountDto){}
}