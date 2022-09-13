export class LoanCreatedEvent {
    constructor(
        public readonly clientKey: string,
        public readonly productKey: string,
        public readonly productName: string,
        public readonly loanAmount: number
    ){}
}