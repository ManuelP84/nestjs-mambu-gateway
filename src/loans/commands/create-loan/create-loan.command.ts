import { CreateLoanDto } from "../../dtos/create-loan/create-loan.dto";

export class CreateLoanCommand {
    constructor(
        public readonly createLoanDto: any
    ){}
}