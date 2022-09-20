import { Injectable } from '@nestjs/common';
import { SigninUserDto, SignupUserDto } from './dtos';
import { UserRepository } from './database/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository
  ){}
  signupLocal(dto: SignupUserDto) {
    this.userRepository.create(dto);
  }
  signinLocal(dto: SigninUserDto) {}
  logout() {}
  refreshTokens(){}
}
