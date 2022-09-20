import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { LoansController } from './loans.controller';
import { LoansCommandsHandlers } from './commands';
import { CommonModule } from '../common/common.module';
import { LoanFactory } from './factories/create-loan.factory';
import { LoansEventsHandlers } from './events/index';
import { DatabaseModule } from '../database/database.module';
import { LoanCreateRepository } from './database/loan.repository';
import { LoanCreated } from './entities/loan-created/loan-created.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([LoanCreated]),
    CommonModule, 
    CqrsModule, 
    DatabaseModule
  ],
  providers: [
    LoanFactory,
    LoanCreateRepository,
    ...LoansCommandsHandlers, 
    ...LoansEventsHandlers, 
  ],
  controllers: [LoansController],
})
export class LoansModule {}
