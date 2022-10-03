import { IEvent } from "@nestjs/cqrs";

export class LoanCreatedEvent implements IEvent{
    constructor(
        public readonly clientKey: string,
        public readonly productKey: string,
        public readonly productName: string,
        public readonly loanAmount: number
    ){}
}