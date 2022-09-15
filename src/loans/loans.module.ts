import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { LoansController } from './loans.controller';
import { LoansCommandsHandlers } from './commands';
import { CommonModule } from '../common/common.module';
import { LoanFactory } from './factories/create-loan.factory';
import { LoansEventsHandlers } from './events/index';

@Module({
  imports: [CommonModule, CqrsModule],
  providers: [
    ...LoansCommandsHandlers, 
    ...LoansEventsHandlers, 
    LoanFactory
  ],
  controllers: [LoansController],
})
export class LoansModule {}
