import { AggregateRoot } from '@nestjs/cqrs';
import { Entity } from 'typeorm';

@Entity()
export class Client extends AggregateRoot {
  constructor(
    private readonly _encodedKey: string,
    private readonly _id: string,
    private readonly _firstNam: string,
    private readonly _lastNam: string,
    private readonly _gender: string,
    private readonly _state: string,
    private readonly _creationDate: string,
    private readonly _lastModifiedDate: string,
    private readonly _approvedDate: string,
    private readonly _preferredLanguage: string,
    private readonly _loanCycle: number,
    private readonly _groupLoanCycle: number,
    private readonly _clientRoleKey: string,
  ) {
    super();
  }
  private readonly assignedBranchKey: string;
  private readonly assignedCentreKey: string;
  private readonly assignedUserKey: string;
  private readonly birthDate: string;
  private readonly closedDate: string;
  private readonly homePhone: string;
  private readonly emailAddress: string;
  private readonly _custom_Fields_Clients: CustomFieldsClients;
  private readonly _example_Custom_Fields: ExampleCustomFields;
  private readonly _family_Clients: FamilyClients;
  private readonly _others_Clients: OthersClients;
  private readonly _client_group_set: ClientGroupSet[];
  private readonly activationDate: string;
  private readonly addresses: Address[];
  private readonly groupKeys: string[];
  private readonly idDocuments: IDDocument[];
  private readonly middleName: string;
  private readonly migrationEventKey: string;
  private readonly mobilePhone: string;
  private readonly mobilePhone2: string;
  private readonly notes: string;
  private readonly portalSettings: PortalSettings;
  private readonly profilePictureKey: string;
  private readonly profileSignatureKey: string;

  public get encodedKey(): string {
    return this._encodedKey;
  }

  public get id(): string {
    return this._id;
  }
  public get lastNam(): string {
    return this._lastNam;
  }
  public get firstNam(): string {
    return this._firstNam;
  }

  public get gender(): string {
    return this._gender;
  }

  public get state(): string {
    return this._state;
  }

  public get clientRoleKey(): string {
    return this._clientRoleKey;
  }

  public get groupLoanCycle(): number {
    return this._groupLoanCycle;
  }

  public get loanCycle(): number {
    return this._loanCycle;
  }

  public get preferredLanguage(): string {
    return this._preferredLanguage;
  }

  public get approvedDate(): string {
    return this._approvedDate;
  }

  public get lastModifiedDate(): string {
    return this._lastModifiedDate;
  }

  public get creationDate(): string {
    return this._creationDate;
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
