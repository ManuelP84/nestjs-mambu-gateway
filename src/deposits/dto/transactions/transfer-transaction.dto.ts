import { IsDate, IsNumber, IsString, IsUUID } from 'class-validator';

class TransferDetails {
  @IsString()
  linkedAccountType: string;

  @IsString()
  linkedAccountId: string;

  @IsString()
  linkedAccountKey: string;
}

export class TransferTransactionDto {
  @IsNumber()
  amount: number;

  @IsString()
  transferDetails: TransferDetails;

  @IsString()
  notes: string;

  @IsString()
  paymentOrderId: string;

  @IsString()
  @IsUUID()
  externalId: string;

  @IsString()
  @IsDate()
  valueDate: string;
}
