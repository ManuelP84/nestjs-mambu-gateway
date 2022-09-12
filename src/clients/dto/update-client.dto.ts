export class UpdateClientDto {
  _Custom_Fields_Clients?: CustomFieldsClients;
  _Example_Custom_Fields?: ExampleCustomFields;
  _Family_Clients?: FamilyClients;
  _Others_Clients?: OthersClients;
  _client_group_set?: ClientGroupSet[];
  activationDate?: string;
  addresses?: Address[];
  approvedDate?: string;
  assignedBranchKey?: string;
  assignedCentreKey?: string;
  assignedUserKey?: string;
  birthDate?: string;
  clientRoleKey?: string;
  closedDate?: string;
  creationDate?: string;
  emailAddress?: string;
  encodedKey?: string;
  firstName?: string;
  gender?: string;
  groupKeys?: string[];
  groupLoanCycle?: number;
  homePhone?: string;
  id?: string;
  idDocuments?: IDDocument[];
  lastModifiedDate?: string;
  lastName?: string;
  loanCycle?: number;
  middleName?: string;
  migrationEventKey?: string;
  mobilePhone?: string;
  mobilePhone2?: string;
  notes?: string;
  portalSettings?: PortalSettings;
  preferredLanguage?: string;
  profilePictureKey?: string;
  profileSignatureKey?: string;
  state?: string;
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
