import { Module } from '@nestjs/common';
import { LoansController } from './loans.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { LoansCommandsHandlers } from './commands';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule, CqrsModule],
  providers: [...LoansCommandsHandlers],
  controllers: [LoansController],
})
export class LoansModule {}
