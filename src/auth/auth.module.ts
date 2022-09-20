import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from './database/user.repository';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    DatabaseModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService, 
    UserRepository, 
  ]
})
export class AuthModule {}
