import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from './clients/clients.module';
import { CommonModule } from './common/common.module';
import { EnvConfig } from './config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfig],
      isGlobal: true
    }),
    ClientsModule, 
    CommonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
