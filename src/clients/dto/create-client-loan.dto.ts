export class CreateClientLoanDto {
    clientInfo: ClientInfo;
    loanInfo:   LoanInfo;
}

interface ClientInfo {
    firstName:         string;
    lastName:          string;
    phoneNumber:       string;
    documentId:        string;
    email:             string;
    gender:            string;
    address:           string;
    preferredLanguage: string;
    _personalizados:   Personalizados;
}

interface Personalizados {
    External_ID: string;
}

interface LoanInfo {
    accountHolderKey:       string;
    accountHolderType:      string;
    loanAmount:             number;
    productTypeKey:         string;
    interestSettings:       InterestSettings;
    scheduleSettings:       ScheduleSettings;
    disbursementDetails:    DisbursementDetails;
    _Informacion_Adicional: InformacionAdicional;
}

interface InformacionAdicional {
    Codigo_Promotor: string;
}

interface DisbursementDetails {
    expectedDisbursementDate: string;
    firstRepaymentDate:       string;
}

interface InterestSettings {
    interestRate: number;
}

interface ScheduleSettings {
    gracePeriod:             number;
    repaymentInstallments:   number;
    repaymentPeriodCount:    number;
    repaymentPeriodUnit:     string;
    repaymentScheduleMethod: string;
    scheduleDueDatesMethod:  string;
}
