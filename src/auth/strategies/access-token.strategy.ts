import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { Strategies } from '../enums';
import { JwtPayload } from '../types';

@Injectable()
export class AccessTokenSreategy extends PassportStrategy(
  Strategy,
  Strategies.jwt,
) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('key'),
    });
  }

  validate(payload: JwtPayload) {
    return payload; // req.user = payload;
  }
}
