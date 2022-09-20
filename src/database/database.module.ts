import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProviders } from './providers/database.providers';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('host'),
          port: configService.get('postgresPort'),
          database: configService.get('postgresDb'),
          username: configService.get('postgresUsername'),
          password: configService.get('postgresPassword'),
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
