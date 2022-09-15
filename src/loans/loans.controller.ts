import { Body, Controller, Param, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateLoanDto } from './dtos/create-loan/create-loan.dto';
import { CreateLoanCommand } from './commands/create-loan/create-loan.command';
import { ChangeStateDto } from './dtos/change-state/change-state.dto';
import { ChangeStateCommand } from './commands/change-state/change-state.command';
import { ResponseChangeStateDto } from './dtos/response-change-state.dto';

@Controller('loans')
export class LoansController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async create(@Body() createLoanDto: CreateLoanDto): Promise<void> {
    await this.commandBus.execute<CreateLoanCommand, void>(
      new CreateLoanCommand(createLoanDto),
    );
  }

  @Post('changeState/:loanAccountId')
  async changeState(
    @Body() changeStateDto: ChangeStateDto,
    @Param('loanAccountId') loanAccountId: string,
    ): Promise<ResponseChangeStateDto> {
    return await this.commandBus.execute<ChangeStateCommand, ResponseChangeStateDto>(
      new ChangeStateCommand(changeStateDto, loanAccountId),
    );
  }
}
