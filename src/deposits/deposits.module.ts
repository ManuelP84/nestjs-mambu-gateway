import { Module } from '@nestjs/common';
import { DepositsService } from './deposits.service';
import { DepositsController } from './deposits.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { depositSagas } from './sagas';

@Module({
  imports: [CqrsModule],
  controllers: [DepositsController],
  providers: [
    DepositsService, 
    ...depositSagas
  ]
})
export class DepositsModule {}
