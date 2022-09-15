import { Connection } from "mongoose";
import { ClientCreatedSchema } from '../../entities/event/client-created.entity';

export const clientProviders = [
    {
      provide: 'CLIENT_CREATED_MODEL',
      useFactory: (connection: Connection) =>
        connection.model('ClientCreated', ClientCreatedSchema),
      inject: ['MONGODB_CONNECTION'],
    },
  ];