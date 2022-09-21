import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

import { Strategies } from '../enums';
import { JwtPayloadRefresh } from '../types';

@Injectable()
export class RefreshTokenSreategy extends PassportStrategy(
  Strategy,
  Strategies.jwtRefresh,
) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('refreshKey'),
      passReqToCallback: true,
    });
  }

  validate(req: Request, payload: JwtPayloadRefresh) {
    const refreshToken = req.get('authorization').replace('Bearer', '').trim();

    return {
      ...payload,
      refreshToken,
    };
  }
}
