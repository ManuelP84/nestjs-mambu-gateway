import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';

import { CreateClientDto } from '../../../clients/dto/create-client/create-client.dto';
import {
  CreateDepositAccountDto,
  DepositTransactionDto,
  WithdrawalTransactionDto,
  TransferTransactionDto,
} from '..';

export class AccountTransactionsDto {
  @ValidateNested()
  @IsNotEmpty()
  @IsOptional()
  @Type(() => CreateClientDto)
  clientInfo: CreateClientDto;

  @ValidateNested()
  @IsNotEmpty()
  @IsOptional()
  @Type(() => CreateDepositAccountDto)
  accountInfo: CreateDepositAccountDto;

  @ValidateNested()
  @IsNotEmpty()
  @IsOptional()
  @Type(() => DepositTransactionDto)
  depositInfo: DepositTransactionDto;

  @ValidateNested()
  @IsNotEmpty()
  @IsOptional()
  @Type(() => WithdrawalTransactionDto)
  withdrawalInfo: WithdrawalTransactionDto;

  @ValidateNested()
  @IsNotEmpty()
  @IsOptional()
  @Type(() => TransferTransactionDto)
  transferInfo: TransferTransactionDto;

  @IsString()
  @IsOptional()
  transferAccount: string;
}
