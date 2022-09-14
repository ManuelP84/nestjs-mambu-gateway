import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  Length,
  MinLength,
  ValidateNested,
} from 'class-validator';
import {
  Addresses,
  _Personalizados,
  PortalSettings,
  OthersClients,
  IDDocument,
  FamilyClients,
  ClientGroupSet,
  CustomFieldsClients,
  ExampleCustomFields,
} from '.';

export class CreateClientDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => CustomFieldsClients)
  _Custom_Fields_Clients?: CustomFieldsClients;

  @IsOptional()
  @ValidateNested()
  @Type(() => ExampleCustomFields)
  _Example_Custom_Fields?: ExampleCustomFields;

  @IsOptional()
  @ValidateNested()
  @Type(() => FamilyClients)
  _Family_Clients?: FamilyClients;

  @IsOptional()
  @ValidateNested()
  @Type(() => OthersClients)
  _Others_Clients?: OthersClients;

  @IsOptional()
  @ValidateNested()
  @Type(() => ClientGroupSet)
  _client_group_set?: ClientGroupSet[];

  @IsOptional()
  @IsString()
  activationDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Addresses)
  addresses?: Addresses[];

  @IsOptional()
  @IsString()
  approvedDate?: string;

  @IsOptional()
  @IsString()
  assignedBranchKey?: string;

  @IsOptional()
  @IsString()
  assignedCentreKey?: string;

  @IsOptional()
  @IsString()
  assignedUserKey?: string;

  @IsOptional()
  @IsString()
  birthDate?: string;

  @IsOptional()
  @IsString()
  clientRoleKey?: string;

  @IsOptional()
  @IsString()
  closedDate?: string;

  @IsOptional()
  @IsString()
  creationDate?: string;

  @IsEmail()
  emailAddress?: string;

  @IsOptional()
  @IsString()
  encodedKey?: string;

  @IsString()
  @MinLength(2)
  firstName: string;

  @IsString()
  gender?: string;

  @IsOptional()
  groupKeys?: string[];

  @IsOptional()
  @IsNumber()
  groupLoanCycle?: number;

  @IsOptional()
  @IsString()
  homePhone?: string;

  @IsOptional()
  @IsNumberString()
  @Length(9)
  id?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => IDDocument)
  idDocuments?: IDDocument[];

  @IsOptional()
  @IsString()
  lastModifiedDate?: string;

  @IsString()
  @MinLength(2)
  lastName: string;

  @IsOptional()
  @IsNumber()
  loanCycle?: number;

  @IsOptional()
  @IsString()
  middleName?: string;

  @IsOptional()
  @IsString()
  migrationEventKey?: string;

  @IsOptional()
  @IsString()
  mobilePhone?: string;

  @IsOptional()
  @IsString()
  mobilePhone2?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => PortalSettings)
  portalSettings?: PortalSettings;

  @IsString()
  preferredLanguage?: string;

  @IsOptional()
  @IsString()
  profilePictureKey?: string;

  @IsOptional()
  @IsString()
  profileSignatureKey?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @ValidateNested()
  @Type(() => _Personalizados)
  _personalizados: _Personalizados;
}
