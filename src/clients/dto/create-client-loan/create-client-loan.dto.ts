import { IsNotEmpty } from 'class-validator';
import { CreateClientDto } from '../create-client/create-client.dto';
import { CreateLoanDto } from '../../../loans/dtos/create-loan.dto';

export class CreateClientLoanDto {
  @IsNotEmpty()
  clientInfo: CreateClientDto;
  @IsNotEmpty()
  loanInfo: CreateLoanDto;
}
