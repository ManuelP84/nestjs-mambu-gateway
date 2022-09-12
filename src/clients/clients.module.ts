import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { CommonModule } from '../common/common.module';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientCommandHandlers } from './commands';
import { ClientEventHandlers } from './events';
import { ClientFactory } from './factories/create-client.factory';
import { ClientQueriesHandlers } from './queries';

@Module({
  imports: [CommonModule, CqrsModule],
  controllers: [ClientsController],
  providers: [
    ClientsService,
    ClientFactory,
    ...ClientCommandHandlers,
    ...ClientEventHandlers,
    ...ClientQueriesHandlers,
  ],
})
export class ClientsModule {}
