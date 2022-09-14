import { CreateClientLoanDto } from '../../dto/create-client-loan/create-client-loan.dto';

export class CreateClientLoanCommand {
    constructor(
        public readonly createClientLoanDto: CreateClientLoanDto,
    ){}
}