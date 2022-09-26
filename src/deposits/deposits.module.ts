import { Module } from '@nestjs/common';
import { DepositsService } from './deposits.service';
import { DepositsController } from './deposits.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { depositSagas } from './sagas';
import { depositTransactionHandlers } from './commands';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [CqrsModule, CommonModule],
  controllers: [DepositsController],
  providers: [
    DepositsService, 
    ...depositSagas,
    ...depositTransactionHandlers,
  ]
})
export class DepositsModule {}
