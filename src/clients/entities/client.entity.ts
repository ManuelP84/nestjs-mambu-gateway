import { AggregateRoot } from '@nestjs/cqrs';

export class Client extends AggregateRoot {
  constructor(
    private readonly firstNam: string,
    private readonly _Custom_Fields_Clients: CustomFieldsClients,
    private readonly _Example_Custom_Fields: ExampleCustomFields,
    private readonly _Family_Clients: FamilyClients,
    private readonly _Others_Clients: OthersClients,
    private readonly _client_group_set: ClientGroupSet[],
    private readonly activationDate: string,
    private readonly addresses: Address[],
    private readonly approvedDate: string,
    private readonly assignedBranchKey: string,
    private readonly assignedCentreKey: string,
    private readonly assignedUserKey: string,
    private readonly birthDate: string,
    private readonly clientRoleKey: string,
    private readonly closedDate: string,
    private readonly creationDate: string,
    private readonly emailAddress: string,
    private readonly encodedKey: string,
    private readonly gender: string,
    private readonly groupKeys: string[],
    private readonly groupLoanCycle: number,
    private readonly homePhone: string,
    private readonly id: string,
    private readonly idDocuments: IDDocument[],
    private readonly lastModifiedDate: string,
    private readonly lastNam: string,
    private readonly loanCycle: number,
    private readonly middleName: string,
    private readonly migrationEventKey: string,
    private readonly mobilePhone: string,
    private readonly mobilePhone2: string,
    private readonly notes: string,
    private readonly portalSettings: PortalSettings,
    private readonly preferredLanguage: string,
    private readonly profilePictureKey: string,
    private readonly profileSignatureKey: string,
    private readonly state: string,
  ) {
    super();
  }
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
