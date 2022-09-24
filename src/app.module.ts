import { Module, Logger } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ClientsModule } from './clients/clients.module';
import { CommonModule } from './common/common.module';
import { EnvConfig } from './config/env.config';
import { DatabaseModule } from './database/database.module';
import { LoansModule } from './loans/loans.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { DepositsModule } from './deposits/deposits.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfig],
      isGlobal: true
    }),
    JwtModule.register({}),    
    //DatabaseModule,
    ClientsModule, 
    CommonModule, 
    AuthModule, 
    LoansModule, DepositsModule,
  ],
})
export class AppModule {}
