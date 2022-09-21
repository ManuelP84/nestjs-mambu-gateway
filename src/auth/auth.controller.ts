import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { SigninUserDto, SignupUserDto } from './dtos';
import { Tokens } from './types';
import { Auth, GetRefreshTokenDecorator, GetUserIdDecorator } from './decorators';
import { ValidRoles } from './enums';
import { AuthRefresh } from './decorators/auth-refresh.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('local/signup')
  @HttpCode(HttpStatus.CREATED)
  signupLocal(@Body() dto: SignupUserDto): Promise<Tokens> {
    return this.authService.signupLocal(dto);
  }

  @Post('local/signin')
  @HttpCode(HttpStatus.OK)
  signinLocal(@Body() dto: SigninUserDto): Promise<Tokens> {
    return this.authService.signinLocal(dto);
  }

  @Auth(ValidRoles.user)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetUserIdDecorator() userId: string) {
    return this.authService.logout(userId);
  }

  @AuthRefresh(ValidRoles.user)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetUserIdDecorator() userId: string,
    @GetRefreshTokenDecorator() rt: string,
  ) {
    return this.authService.refreshTokens(userId, rt);
  }
}
