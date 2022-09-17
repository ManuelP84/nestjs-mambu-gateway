import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TypeOrmAdapter } from '../../database/utils/typeorm-adapter.repository';
import { LoanCreated } from '../entities/loan-created/loan-created.entity';

@Injectable()
export class LoanCreateRepository extends TypeOrmAdapter<LoanCreated> {
  constructor(
    @Inject('LOAN_POSTGRES_MODEL')
    private readonly loanCreatedRepository: Repository<LoanCreated>,
  ) {
    super(loanCreatedRepository);
  }
}
