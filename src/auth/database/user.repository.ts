import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TypeOrmAdapter } from '../../database/utils/typeorm-adapter.repository';
import { User } from '../entities';

@Injectable()
export class UserRepository extends TypeOrmAdapter<User> {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {
    super(repository);
  }
}
