import mongoose from 'mongoose';
import { DataSource } from 'typeorm';

import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: 'MONGODB_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.MONGO_ATLAS_CONNECTON),
  },
  {
    provide: 'POSTGRES_CONNECTION',
    useFactory: async (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: config.get('postgresPort'),
        username: config.get('postgresUsername'),
        password: config.get('postgresPassword'),
        database: config.get('postgresDb'),
        synchronize: true,
      });
      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];
