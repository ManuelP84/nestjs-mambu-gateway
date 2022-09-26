import { IsString, IsUUID } from "class-validator"

export class CreateDepositAccountDto {    
    @IsString()
    accountHolderKey:  string

    @IsString()
    accountHolderType: string

    @IsString()
    name:              string

    @IsString()
    productTypeKey:    string

    @IsString()
    accountState:      string

    @IsString()
    notes:             string

    @IsString()
    accountType:       string

    @IsString()
    currencyCode:      string;
}
