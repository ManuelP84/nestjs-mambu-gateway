import { CreateClientDto } from '../../dto/create-client/create-client.dto';

export class CreateClientCommand {
    constructor(
        public readonly createClientDto: CreateClientDto,
        public readonly data?: any,
        ){}      
}