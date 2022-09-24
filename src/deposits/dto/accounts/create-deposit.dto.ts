import { IsString, IsUUID } from "class-validator"

export class CreateDepositAccountDto {    
    @IsString()
    @IsUUID()
    accountHolderKey:  string

    @IsString()
    accountHolderType: string

    @IsString()
    name:              string

    @IsString()
    @IsUUID()
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
