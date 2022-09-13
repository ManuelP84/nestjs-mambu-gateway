import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateClientLoanCommand } from './create-client-loan.command';

@CommandHandler(CreateClientLoanCommand)
export class CreateClientLoanHandler implements ICommandHandler {
    execute(command: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
}