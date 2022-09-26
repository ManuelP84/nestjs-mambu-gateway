import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

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

  @ValidateNested()
  @Type(() => TransferDetails)
  transferDetails: TransferDetails;

  @IsString()
  notes: string;

  @IsString()
  @IsOptional()
  paymentOrderId: string;

  @IsString()
  @IsUUID()
  externalId: string;

  @IsString()
  @IsOptional()
  valueDate: string;
}
