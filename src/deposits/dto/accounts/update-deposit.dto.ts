import { PartialType } from '@nestjs/mapped-types';
import { CreateDepositAccountDto } from './create-deposit.dto';

export class UpdateDepositAccountDto extends PartialType(CreateDepositAccountDto) {}

