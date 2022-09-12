export class CreateClientDto {
  _Custom_Fields_Clients: CustomFieldsClients;
  _Example_Custom_Fields: ExampleCustomFields;
  _Family_Clients: FamilyClients;
  _Others_Clients: OthersClients;
  _client_group_set: ClientGroupSet[];
  addresses: Address[];
  assignedBranchKey: string;
  assignedCentreKey: string;
  assignedUserKey: string;
  birthDate: string;
  clientRoleKey: string;
  emailAddress: string;
  firstName: string;
  gender: string;
  groupKeys: string[];
  homePhone: string;
  id: string;
  idDocuments: IDDocument[];
  lastName: string;
  middleName: string;
  mobilePhone: string;
  mobilePhone2: string;
  notes: string;
  portalSettings: PortalSettings;
  preferredLanguage: string;
  state: string;
  _personalizados: { External_ID: string };
}

export interface CustomFieldsClients {
  Position_Clients?: string;
  dep_fld?: string;
  score_2?: string;
}

export interface ExampleCustomFields {
  exampleCheckboxField?: string;
  exampleFreeTextField?: string;
  exampleNumberField?: string;
  exampleSelectField?: string;
}

export interface FamilyClients {
  Family_Members_Clients?: string;
  Has_children_Clients?: string;
}

export interface OthersClients {
  Location_Clients?: string;
  Studies_Clients?: string;
  delete_me?: string;
  vrfy_lnk?: string;
  vrfy_param?: string;
}

export interface ClientGroupSet {
  _grp_set_1?: string;
  _grp_set_clt_2?: string;
  _grp_set_fld_3?: string;
}

export interface Address {
  city?: string;
  country?: string;
  indexInList?: number;
  latitude?: number;
  line1?: string;
  line2?: string;
  longitude?: number;
  postcode?: string;
  region?: string;
}

export interface IDDocument {
  attachments?: Attachment[];
  documentId?: string;
  documentType?: string;
  identificationDocumentTemplateKey?: string;
  indexInList?: number;
  issuingAuthority?: string;
  validUntil?: string;
}

export interface Attachment {
  fileName?: string;
  fileSize?: number;
  id?: number;
  location?: string;
  name?: string;
  notes?: string;
  type?: string;
}

export interface PortalSettings {
  lastLoggedInDate?: string;
  portalState?: string;
}
