import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './database/user.repository';
import { DatabaseModule } from '../database/database.module';
import { User } from './entities';
import { strategiesProviders } from './providers/strategies.providers';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule,
    DatabaseModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService, 
    UserRepository,
    ...strategiesProviders, 
  ]
})
export class AuthModule {}
