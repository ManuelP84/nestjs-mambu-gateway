import { CreateClientLoanDto } from '../../dto/create-client-loan.dto';

export class CreateClientLoanCommand {
    constructor(
        public readonly createClientLoanDto: CreateClientLoanDto,
    ){}
}