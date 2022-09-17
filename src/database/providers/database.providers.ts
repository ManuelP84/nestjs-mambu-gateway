import mongoose from 'mongoose';
import { DataSource } from 'typeorm';

import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: 'MONGODB_CONNECTION',
    useFactory: (config: ConfigService): Promise<typeof mongoose> =>
      mongoose.connect(config.get('mongoConnection')),
    inject: [ConfigService],
  },
  {
    provide: 'POSTGRES_CONNECTION',
    useFactory: (config: ConfigService): DataSource => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: config.get('postgresPort'),
        username: config.get('postgresUsername'),
        password: config.get('postgresPassword'),
        database: config.get('postgresDb'),
        synchronize: true,
      });
      return dataSource;
    },
    inject: [ConfigService],
  },
];
