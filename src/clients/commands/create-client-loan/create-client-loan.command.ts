import { CreateClientDto } from '../../dto/create-client.dto';

export class CreateClientLoanCommand {
    constructor(
        public readonly createClientDto: CreateClientDto,
        public readonly loanId: string,
    ){}
}