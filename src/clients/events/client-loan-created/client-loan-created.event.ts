import { IEvent } from '@nestjs/cqrs';
export class ClientLoanCreatedEvent implements IEvent{
    constructor(
        public readonly clientId: string,
        public readonly productName: string,
        public readonly loanId: string,
    ){}
}