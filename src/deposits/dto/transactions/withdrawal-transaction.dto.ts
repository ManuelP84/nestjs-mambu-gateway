import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

class TransactionDetails {
  @IsString()
  transactionChannelId: string;
}

export class WithdrawalTransactionDto {
  @IsNumber()
  amount: number;

  @ValidateNested()
  @Type(() => TransactionDetails)
  transactionDetails: TransactionDetails;

  @IsString()
  notes: string;

  @IsString()
  @IsOptional()
  paymentOrderId: string;

  @IsString()
  @IsUUID()
  externalId: string;

  @IsString()
  bookingDate: string;

  @IsString()
  @IsOptional()
  valueDate: string;
}
