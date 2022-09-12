export class ResponseClientDto {
  encodedKey: string;
  state: string;
  id: string;
  creationDate: string;
  lastModifiedDate: string;
  approvedDate: string;
  firstName: string;
  lastName: string;
  gender: string;
  preferredLanguage: string;
  loanCycle: number;
  groupLoanCycle: number;
  portalPreferences: {};
  clientRole: {
    encodedKey: string;
  };
}
