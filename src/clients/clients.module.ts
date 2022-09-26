import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { ClientsController } from './clients.controller';
import { CommonModule } from '../common/common.module';
import { ClientCommandHandlers } from './commands';
import { ClientEventHandlers } from './events';
import { ClientQueriesHandlers } from './queries';
import { DatabaseModule } from '../database/database.module';
import { ClientCreatedRepository } from './database/client.repository';
import { clientProviders } from './database/providers/clients-database.providers';
import { clientsSagas } from './sagas';

@Module({
  imports: [
    CommonModule, 
    CqrsModule, 
    DatabaseModule, 
  ],
  controllers: [ClientsController],
  providers: [
    ClientCreatedRepository,
    ...ClientCommandHandlers,
    ...ClientEventHandlers,
    ...ClientQueriesHandlers,
    ...clientProviders,
    ...clientsSagas,
  ],
})
export class ClientsModule {}
