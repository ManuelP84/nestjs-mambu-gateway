import mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: 'MONGODB_CONNECTION',
    useFactory: (config: ConfigService): Promise<typeof mongoose> =>
      mongoose.connect(config.get('mongoConnection')),
    inject: [ConfigService],
  },
];
