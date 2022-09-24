import { Type } from 'class-transformer';
import { IsNumber, IsString, IsUUID, ValidateNested } from 'class-validator';

class TransactionDetails {
  @IsString()
  transactionChannelId: string;
}

export class DepositTransactionDto {  
  @IsNumber()
  amount: number;

  @ValidateNested()
  @Type(() => TransactionDetails)
  transactionDetails: TransactionDetails;

  @IsString()
  notes: string;

  @IsString()
  paymentOrderId: string;

  @IsString()
  @IsUUID()
  externalId: string;

  @IsString()
  bookingDate: string;

  @IsString()
  valueDate: string;
}

