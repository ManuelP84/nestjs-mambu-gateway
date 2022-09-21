import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Strategies } from '../enums';

@Injectable()
export class RefreshTokenGuard extends AuthGuard(Strategies.jwtRefresh) {
  constructor() {
    super();
  }
}
