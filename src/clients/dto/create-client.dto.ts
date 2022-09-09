import {
  Address,
  ClientGroupSet,
  ClientInterface,
  CustomFieldsClients,
  ExampleCustomFields,
  FamilyClients,
  IDDocument,
  OthersClients,
  PortalSettings,
} from '../interfaces/create-client-interface';

export class CreateClientDto implements ClientInterface {
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
