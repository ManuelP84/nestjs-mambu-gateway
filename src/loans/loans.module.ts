import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { LoansController } from './loans.controller';
import { LoansCommandsHandlers } from './commands';
import { CommonModule } from '../common/common.module';
import { LoanFactory } from './factories/create-loan.factory';
import { LoansEventsHandlers } from './events/index';
import { DatabaseModule } from '../database/database.module';
import { loanProviders } from './database/providers/loans-database.providers';
import { LoanCreateRepository } from './database/loan.repository';

@Module({
  imports: [CommonModule, CqrsModule, DatabaseModule],
  providers: [
    LoanFactory,
    LoanCreateRepository,
    ...LoansCommandsHandlers, 
    ...LoansEventsHandlers, 
    ...loanProviders,    
  ],
  controllers: [LoansController],
})
export class LoansModule {}
