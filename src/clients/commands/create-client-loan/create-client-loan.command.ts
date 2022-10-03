import { ICommand } from '@nestjs/cqrs';

import { CreateClientLoanDto } from '../../dto/create-client-loan/create-client-loan.dto';

export class CreateClientLoanCommand implements ICommand{
    constructor(
        public readonly createClientLoanDto: CreateClientLoanDto,
    ){}
}