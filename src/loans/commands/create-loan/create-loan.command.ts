import { CreateLoanDto } from "../../dtos/create-loan.dto";

export class CreateLoanCommand {
    constructor(
        public readonly createLoanDto: CreateLoanDto
    ){}
}