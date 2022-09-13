export class ClientCreatedEvent {
    constructor(
        public readonly clientId: string,
        public readonly clientName: string,
        public readonly clientLastName: string,
        ){}
}