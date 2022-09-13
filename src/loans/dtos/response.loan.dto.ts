export class ResponseLoanDto {
    encodedKey:                      string;
    id:                              string;
    accountHolderType:               string;
    accountHolderKey:                string;
    creationDate:                    string;
    lastModifiedDate:                string;
    accountState:                    string;
    productTypeKey:                  string;
    loanName:                        string;
    loanAmount:                      number;
    paymentMethod:                   string;
    accruedInterest:                 number;
    accruedPenalty:                  number;
    allowOffset:                     boolean;
    arrearsTolerancePeriod:          number;
    accountArrearsSettings:          AccountArrearsSettings;
    latePaymentsRecalculationMethod: string;
    balances:                        { [key: string]: number };
    disbursementDetails:             DisbursementDetails;
    prepaymentSettings:              PrepaymentSettings;
    penaltySettings:                 PenaltySettings;
    scheduleSettings:                ScheduleSettings;
    interestSettings:                InterestSettings;
    assets:                          any[];
    guarantors:                      any[];
    tranches:                        any[];
    futurePaymentsAcceptance:        string;
    currency:                        Currency;
    _Informacion_Adicional:          InformacionAdicional;
}

interface InformacionAdicional {
    Codigo_Promotor: string;
}

interface AccountArrearsSettings {
    encodedKey:                                string;
    toleranceCalculationMethod:                string;
    dateCalculationMethod:                     string;
    nonWorkingDaysMethod:                      string;
    toleranceFloorAmount:                      number;
    tolerancePeriod:                           number;
    tolerancePercentageOfOutstandingPrincipal: number;
}

interface Currency {
    currencyCode: string;
    code:         string;
}

interface DisbursementDetails {
    encodedKey:               string;
    expectedDisbursementDate: string;
    firstRepaymentDate:       string;
    transactionDetails:       TransactionDetails;
    fees:                     any[];
}

interface TransactionDetails {
    encodedKey:            string;
    transactionChannelKey: string;
    transactionChannelId:  string;
    internalTransfer:      boolean;
}

interface InterestSettings {
    interestRateSource:               string;
    accrueInterestAfterMaturity:      boolean;
    interestApplicationMethod:        string;
    interestBalanceCalculationMethod: string;
    interestCalculationMethod:        string;
    interestChargeFrequency:          string;
    interestRate:                     number;
    interestType:                     string;
    accrueLateInterest:               boolean;
}

interface PenaltySettings {
    loanPenaltyCalculationMethod: string;
    penaltyRate:                  number;
}

interface PrepaymentSettings {
}

interface ScheduleSettings {
    hasCustomSchedule:                  boolean;
    defaultFirstRepaymentDueDateOffset: number;
    principalRepaymentInterval:         number;
    gracePeriod:                        number;
    gracePeriodType:                    string;
    repaymentInstallments:              number;
    repaymentPeriodCount:               number;
    scheduleDueDatesMethod:             string;
    periodicPayment:                    number;
    repaymentPeriodUnit:                string;
    repaymentScheduleMethod:            string;
    paymentPlan:                        any[];
}
