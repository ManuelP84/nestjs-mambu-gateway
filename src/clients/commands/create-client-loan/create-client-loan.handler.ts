import { CommandBus, CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateClientLoanCommand } from './create-client-loan.command';
import { CreateClientCommand } from '../create-client/create-client.command';
import { Client } from '../../entities/client/client.entity';
import { CreateLoanCommand } from '../../../loans/commands/create-loan/create-loan.command';
import { Loan } from '../../../loans/entities/loan/loan.entity';
import { ClientLoanCreatedEvent } from '../../events/client-loan-created/client-loan-created.event';

@CommandHandler(CreateClientLoanCommand)
export class CreateClientLoanHandler implements ICommandHandler {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly eventBus: EventBus,
    ) {}

  async execute(command: CreateClientLoanCommand): Promise<void> {
    const { createClientLoanDto } = command;
    const { clientInfo } = createClientLoanDto;
    const { loanInfo } = createClientLoanDto;

    const newClient = await this.commandBus.execute<
      CreateClientCommand,
      Client
    >(new CreateClientCommand(clientInfo));

    console.log(newClient);

    const newLoan = await this.commandBus.execute<CreateLoanCommand, Loan>(
      new CreateLoanCommand({
        ...loanInfo,
        accountHolderKey: newClient.encodedKey,
      }),
    );

    if(newClient && newLoan){
      this.eventBus.publish(new ClientLoanCreatedEvent(newLoan.accountHolderKey, newLoan.loanName));
    }
  }
}
