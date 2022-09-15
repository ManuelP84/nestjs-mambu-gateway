import { Injectable } from '@nestjs/common';

import { ResponseLoanDto } from '../dtos/response.loan.dto';
import { Loan } from '../entities/loan/loan.entity';
import { LoanCreatedEvent } from '../events/loan-created/loan-created.event';

@Injectable()
export class LoanFactory {
  create(data: ResponseLoanDto): Loan {
    const loan = new Loan(
      data.encodedKey,
      data.id,
      data.accountHolderType,
      data.accountHolderKey,
      data.creationDate,
      data.lastModifiedDate,
      data.accountState,
      data.productTypeKey,
      data.loanName,
      data.loanAmount,
      data.paymentMethod,
      data.accruedInterest,
      data.accruedPenalty,
      data.allowOffset,
      data.arrearsTolerancePeriod,
    );
    loan.apply(
      new LoanCreatedEvent(
        loan.accountHolderKey,
        loan.encodedKey,
        loan.loanName,
        loan.loanAmount,
      ),
    );

    return loan;
  }
}
