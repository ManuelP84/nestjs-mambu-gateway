import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmAdapter } from '../../database/utils/typeorm-adapter.repository';
import { LoanCreated } from '../entities/loan-created/loan-created.entity';

@Injectable()
export class LoanCreateRepository extends TypeOrmAdapter<LoanCreated> {
  constructor(
    @InjectRepository(LoanCreated)
    private readonly repository: Repository<LoanCreated>,
  ) {
    super(repository);
  }
}
