export class ClientLoanCreatedEvent {
    constructor(
        public readonly clientId: string,
        public readonly productName: string,
        public readonly loanId: string,
    ){}
}