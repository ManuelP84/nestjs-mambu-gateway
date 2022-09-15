import { IsOptional, IsString } from 'class-validator';
import { Fee, TransactionDetails } from '.';

export class CreateLoanDtoDisbursementDetails {
  @IsOptional()
  disbursementDate: string;

  @IsOptional()
  encodedKey: string;

  @IsString()
  expectedDisbursementDate: string;

  @IsOptional()
  fees: Fee[];

  @IsString()
  firstRepaymentDate: string;

  @IsOptional()
  transactionDetails: TransactionDetails;
}
