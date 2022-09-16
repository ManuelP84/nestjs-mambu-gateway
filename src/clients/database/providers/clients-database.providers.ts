import { Connection } from 'mongoose';
import { ClientCreatedSchema } from '../../entities/event/client-created.entity';
import { DataSource } from 'typeorm';
import { Client } from '../../entities/client/client.entity';

export const clientProviders = [
  {
    provide: 'CLIENT_MONGO_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('ClientCreated', ClientCreatedSchema),
    inject: ['MONGODB_CONNECTION'],
  },
  {
    provide: 'CLIENT_POSTGRES_MODEL',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Client),
    inject: ['POSTGRES_CONNECTION'],
  },
];
