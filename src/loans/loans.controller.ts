import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateLoanDto } from './dtos/create-loan/create-loan.dto';
import { CreateLoanCommand } from './commands/create-loan/create-loan.command';

@Controller('loans')
export class LoansController {
    constructor(
        private readonly commandBus: CommandBus,
    ){}

    @Post()
    async create(@Body() createLoanDto: CreateLoanDto): Promise<void> {
        await this.commandBus.execute<CreateLoanCommand, void>(
            new CreateLoanCommand(createLoanDto),
        );
    }
}
