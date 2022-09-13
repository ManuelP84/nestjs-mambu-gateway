import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateClientLoanCommand } from './create-client-loan.command';
import { CreateClientCommand } from '../create-client/create-client.command';
import { Client } from '../../entities/client/client.entity';
import { CreateLoanCommand } from '../../../loans/commands/create-loan/create-loan.command';

@CommandHandler(CreateClientLoanCommand)
export class CreateClientLoanHandler implements ICommandHandler {
  constructor(private readonly commandBus: CommandBus) {}

  async execute(command: CreateClientLoanCommand): Promise<void> {
    const { createClientLoanDto } = command;
    const { clientInfo } = createClientLoanDto;
    const { loanInfo } = createClientLoanDto;

    const newClient = await this.commandBus.execute<
      CreateClientCommand,
      Client
    >(new CreateClientCommand(clientInfo));

    console.log(newClient);

    await this.commandBus.execute<CreateLoanCommand, void>(
      new CreateLoanCommand({
        ...loanInfo,
        accountHolderKey: newClient.encodedKey,
      }),
    );
  }
}
