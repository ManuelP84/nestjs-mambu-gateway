import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Strategies } from '../enums';

@Injectable()
export class AccessTokenGuard extends AuthGuard(Strategies.jwt) {
  constructor() {
    super();
  }
}
