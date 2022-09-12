import { Connection } from "mongoose";
import { CLientCreatedSchema } from '../../entities/event/client-created.event';

export const usersProviders = [
    {
      provide: 'CLIENT_CREATED_MODEL',
      useFactory: (connection: Connection) =>
        connection.model('ClientCreated', CLientCreatedSchema),
      inject: ['MONGODB_CONNECTION'],
    },
  ];