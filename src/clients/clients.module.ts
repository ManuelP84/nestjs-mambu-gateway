import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { ClientsController } from './clients.controller';
import { CommonModule } from '../common/common.module';
import { ClientCommandHandlers } from './commands';
import { ClientEventHandlers } from './events';
import { ClientFactory } from './factories/create-client.factory';
import { ClientQueriesHandlers } from './queries';
import { DatabaseModule } from '../database/database.module';
import { ClientCreatedRepository } from './database/client.repository';
import { usersProviders } from './database/providers/clients-database.providers';

@Module({
  imports: [CommonModule, CqrsModule, DatabaseModule],
  controllers: [ClientsController],
  providers: [
    ClientFactory,
    ClientCreatedRepository,
    ...ClientCommandHandlers,
    ...ClientEventHandlers,
    ...ClientQueriesHandlers,
    ...usersProviders
  ],
})
export class ClientsModule {}
