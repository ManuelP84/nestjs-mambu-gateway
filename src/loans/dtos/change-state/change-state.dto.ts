import { IsEnum, IsOptional, IsString } from 'class-validator';
import { LoanAccountActions } from '../enums/loan-account-action.enum';

export class ChangeStateDto {
  @IsEnum(LoanAccountActions)
  action: string;

  @IsOptional()
  @IsString()
  notes: string;
}
