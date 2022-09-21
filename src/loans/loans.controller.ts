import { Body, Controller, Param, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CreateLoanDto } from './dtos/create-loan/create-loan.dto';
import { CreateLoanCommand } from './commands/create-loan/create-loan.command';
import { ChangeStateDto } from './dtos/change-state/change-state.dto';
import { ChangeStateCommand } from './commands/change-state/change-state.command';
import { ResponseChangeStateDto } from './dtos/response-change-state.dto';
import { Loan } from './entities/loan/loan.entity';
import { Auth } from '../auth/decorators/auth.decorator';
import { ValidRoles } from '../auth/enums/valid-roles.enum';

@Controller('loans')
export class LoansController {
  constructor(private readonly commandBus: CommandBus) {}

  @Auth(ValidRoles.user)
  @Post()
  async create(@Body() createLoanDto: CreateLoanDto): Promise<Loan> {
    /**
     * Create a new loan account
     */
    return await this.commandBus.execute<CreateLoanCommand, Loan>(
      new CreateLoanCommand(createLoanDto),
    );
  }

  @Auth(ValidRoles.user)
  @Post('changeState/:loanAccountId')
  async changeState(
    /**
     * Change the loan account state
     */
    @Body() changeStateDto: ChangeStateDto,
    @Param('loanAccountId') loanAccountId: string,
  ): Promise<ResponseChangeStateDto> {
    return await this.commandBus.execute<
      ChangeStateCommand,
      ResponseChangeStateDto
    >(new ChangeStateCommand(changeStateDto, loanAccountId));
  }
}
