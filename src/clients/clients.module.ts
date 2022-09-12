import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { CommonModule } from '../common/common.module';
import { CqrsModule } from '@nestjs/cqrs';
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
    ClientsService,
    ClientFactory,
    ClientCreatedRepository,
    ...ClientCommandHandlers,
    ...ClientEventHandlers,
    ...ClientQueriesHandlers,
    ...usersProviders
  ],
})
export class ClientsModule {}
