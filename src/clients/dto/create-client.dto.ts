import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  IsUUID,
  Length,
  MinLength,
  ValidateNested,
} from 'class-validator';

class _Personalizados {
  @IsUUID()
  External_ID: string;
}

export class CreateClientDto {
  @IsOptional()
  _Custom_Fields_Clients?: CustomFieldsClients;

  @IsOptional()
  _Example_Custom_Fields?: ExampleCustomFields;

  @IsOptional()
  _Family_Clients?: FamilyClients;

  @IsOptional()
  _Others_Clients?: OthersClients;

  @IsOptional()
  _client_group_set?: ClientGroupSet[];

  @IsOptional()
  @IsString()
  activationDate?: string;

  @IsOptional()
  addresses?: Address[];

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

interface CustomFieldsClients {
  Position_Clients?: string;
  dep_fld?: string;
  score_2?: string;
}

interface ExampleCustomFields {
  exampleCheckboxField?: string;
  exampleFreeTextField?: string;
  exampleNumberField?: string;
  exampleSelectField?: string;
}

interface FamilyClients {
  Family_Members_Clients?: string;
  Has_children_Clients?: string;
}

interface OthersClients {
  Location_Clients?: string;
  Studies_Clients?: string;
  delete_me?: string;
  vrfy_lnk?: string;
  vrfy_param?: string;
}

interface ClientGroupSet {
  _grp_set_1?: string;
  _grp_set_clt_2?: string;
  _grp_set_fld_3?: string;
}

interface Address {
  city?: string;
  country?: string;
  encodedKey?: string;
  indexInList?: number;
  latitude?: number;
  line1?: string;
  line2?: string;
  longitude?: number;
  parentKey?: string;
  postcode?: string;
  region?: string;
}

interface IDDocument {
  attachments?: Attachment[];
  clientKey?: string;
  documentId?: string;
  documentType?: string;
  encodedKey?: string;
  identificationDocumentTemplateKey?: string;
  indexInList?: number;
  issuingAuthority?: string;
  validUntil?: string;
}

interface Attachment {
  creationDate?: string;
  encodedKey?: string;
  fileName?: string;
  fileSize?: number;
  id?: number;
  lastModifiedDate?: string;
  location?: string;
  name?: string;
  notes?: string;
  ownerKey?: string;
  ownerType?: string;
  type?: string;
}

interface PortalSettings {
  encodedKey?: string;
  lastLoggedInDate?: string;
  portalState?: string;
}
