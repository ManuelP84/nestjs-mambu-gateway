import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

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
  @Type(() => CreateClientDto)
  clientInfo: CreateClientDto;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => CreateDepositAccountDto)
  accountInfo: CreateDepositAccountDto;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => DepositTransactionDto)
  depositInfo: DepositTransactionDto;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => WithdrawalTransactionDto)
  withdrawalInfo: WithdrawalTransactionDto;

  @ValidateNested()
  @IsNotEmpty()
  @Type(() => TransferTransactionDto)
  transferInfo: TransferTransactionDto;

  @IsString()
  transferAccount: string;
}
