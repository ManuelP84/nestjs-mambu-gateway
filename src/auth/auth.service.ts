import * as bcrypt from 'bcrypt';
import { IsNull, Not } from 'typeorm';
import {
  ForbiddenException,
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { SigninUserDto, SignupUserDto } from './dtos';
import { UserRepository } from './database/user.repository';
import { Tokens } from './types';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async signupLocal(dto: SignupUserDto): Promise<Tokens> {
    try {
      const { name, lastName, email } = dto;
      const hash = await this.hashData(dto.password);

      const createdUser = await this.userRepository.create({
        name,
        lastName,
        email,
        hash,
      });
      
      const tokens = await this.getTokens(createdUser.id, createdUser.email, createdUser.roles);
      await this.updateRtHash(createdUser.id, tokens.refreshToken);
      return tokens;
    } catch (error) {
      this.handleErrors(error);
    }
  }

  async signinLocal(dto: SigninUserDto): Promise<Tokens> {
    const { email, password } = dto;
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
      select: {
        email: true,
        hash: true,
        id: true,
        roles: true,
      },
    });

    if (!user) {
      throw new ForbiddenException('Accesd denied');
    }

    const passwordMatches = await bcrypt.compare(password, user.hash);

    if (!passwordMatches) {
      throw new ForbiddenException('Accesd denied');
    }

    const tokens = await this.getTokens(user.id, user.email, user.roles);
    await this.updateRtHash(user.id, tokens.refreshToken);
    return tokens;
  }

  async logout(userId: string) {
    await this.userRepository.findOneAndReplace(
      {
        where: {
          id: userId,
          hashRt: Not(IsNull()),
        },
      },
      {
        id: userId,
        hashRt: null,
      },
    );
  }

  async refreshTokens(userId: string, rt: string) {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
      select: {
        email: true,
        hashRt: true,
        id: true,
        roles: true,
      },
    });

    if (!user || !user.hashRt) {
      throw new ForbiddenException('Access denied');
    }

    const rtMatches = await bcrypt.compare(rt, user.hashRt);

    if (!rtMatches) {
      throw new ForbiddenException('Accesd denied');
    }

    const tokens = await this.getTokens(user.id, user.email, user.roles);
    await this.updateRtHash(user.id, tokens.refreshToken);
    return tokens;
  }

  private async updateRtHash(userId: string, rt: string) {
    const hashRt = await this.hashData(rt);
    await this.userRepository.findOneAndReplace(
      {
        where: {
          id: userId,
        },
      },
      {
        id: userId,
        hashRt,
      },
    );
  }

  private async getTokens(userId: string, email: string, roles: string[]) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
          roles,
        },
        {
          secret: this.configService.get('key'),
          expiresIn: this.configService.get('atExpiresIn'),
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          email,
          roles,
        },
        {
          secret: this.configService.get('refreshKey'),
          expiresIn: this.configService.get('rtExpiresIn'),
        },
      ),
    ]);

    return { accessToken, refreshToken };
  }

  private hashData(password: string) {
    return bcrypt.hash(password, 10);
  }

  private handleErrors(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    throw new InternalServerErrorException('Please check server logs');
  }
}
