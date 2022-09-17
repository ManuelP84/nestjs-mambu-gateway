import { LoanCreated } from '../../../loans/entities/loan-created/loan-created.entity'
import { DataSource, Repository } from "typeorm";

export const loanProviders = [
    {
      provide: 'LOAN_POSTGRES_MODEL',
      useFactory: async (dataSource: DataSource): Promise<Repository<LoanCreated>> => {
        dataSource.setOptions({
          entities:[LoanCreated]
        })
        await dataSource.initialize();
        return dataSource.getRepository<LoanCreated>(LoanCreated);                
      },
      inject: ['POSTGRES_CONNECTION'],
    },
  ];
  