export class ResponseWithdrawalDto {
    accountBalances:          AccountBalances;
    adjustmentTransactionKey: string;
    affectedAmounts:          AffectedAmounts;
    amount:                   number;
    blockId:                  string;
    bookingDate:              string;
    branchKey:                string;
    cardTransaction:          CardTransaction;
    centreKey:                string;
    creationDate:             string;
    currencyCode:             string;
    encodedKey:               string;
    externalId:               string;
    fees:                     Fee[];
    holdExternalReferenceId:  string;
    id:                       string;
    interestAccruedAmounts:   InterestAccruedAmounts;
    migrationEventKey:        string;
    notes:                    string;
    originalTransactionKey:   string;
    parentAccountKey:         string;
    paymentDetails:           PaymentDetails;
    paymentOrderId:           string;
    taxes:                    Taxes;
    terms:                    Terms;
    tillKey:                  string;
    transactionDetails:       TransactionDetails;
    transferDetails:          TransferDetails;
    type:                     string;
    userKey:                  string;
    valueDate:                string;
}

interface AccountBalances {
    totalBalance: number;
}

interface AffectedAmounts {
    feesAmount:                       number;
    fractionAmount:                   number;
    fundsAmount:                      number;
    interestAmount:                   number;
    overdraftAmount:                  number;
    overdraftFeesAmount:              number;
    overdraftInterestAmount:          number;
    technicalOverdraftAmount:         number;
    technicalOverdraftInterestAmount: number;
}

interface CardTransaction {
    advice:                           boolean;
    amount:                           number;
    cardAcceptor:                     CardAcceptor;
    cardToken:                        string;
    currencyCode:                     string;
    encodedKey:                       string;
    externalAuthorizationReferenceId: string;
    externalReferenceId:              string;
    userTransactionTime:              string;
}

interface CardAcceptor {
    city:    string;
    country: string;
    mcc:     number;
    name:    string;
    state:   string;
    street:  string;
    zip:     string;
}

interface Fee {
    amount:           number;
    name:             string;
    predefinedFeeKey: string;
    taxAmount:        number;
    trigger:          string;
}

interface InterestAccruedAmounts {
    interestAccrued:                   number;
    negativeInterestAccrued:           number;
    overdraftInterestAccrued:          number;
    technicalOverdraftInterestAccrued: number;
}

interface PaymentDetails {
    creditor:               Tor;
    creditorAccount:        TorAccount;
    creditorAgent:          TorAgent;
    debtor:                 Tor;
    debtorAccount:          TorAccount;
    debtorAgent:            TorAgent;
    paymentIdentification:  PaymentIdentification;
    paymentTypeInformation: PaymentTypeInformation;
    remittanceInformation:  RemittanceInformation;
}

interface Tor {
    name: string;
}

interface TorAccount {
    currency:       string;
    identification: Identification;
}

interface Identification {
    iban:  string;
    other: Other;
}

interface Other {
    identification: string;
    scheme:         string;
}

interface TorAgent {
    financialInstitutionIdentification: FinancialInstitutionIdentification;
}

interface FinancialInstitutionIdentification {
    bic: string;
}

interface PaymentIdentification {
    endToEndIdentification:    string;
    instructionIdentification: string;
    transactionIdentification: string;
}

interface PaymentTypeInformation {
    serviceLevel: ServiceLevel;
}

interface ServiceLevel {
    code: string;
}

interface RemittanceInformation {
    structured:   Structured;
    unstructured: string;
}

interface Structured {
    creditorReferenceInformation: CreditorReferenceInformation;
}

interface CreditorReferenceInformation {
    reference:       string;
    referenceIssuer: string;
    referenceType:   string;
}

interface Taxes {
    taxRate: number;
}

interface Terms {
    interestSettings:          InterestSettings;
    overdraftInterestSettings: InterestSettings;
    overdraftSettings:         OverdraftSettings;
}

interface InterestSettings {
    indexInterestRate: number;
    interestRate:      number;
}

interface OverdraftSettings {
    overdraftLimit: number;
}

interface TransactionDetails {
    transactionChannelId:  string;
    transactionChannelKey: string;
}

interface TransferDetails {
    linkedDepositTransactionKey: string;
    linkedLoanTransactionKey:    string;
}
