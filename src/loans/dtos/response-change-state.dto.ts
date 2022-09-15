export class ResponseChangeStateDto {
    encodedKey:                      string;
    id:                              string;
    accountHolderType:               string;
    accountHolderKey:                string;
    creationDate:                    string;
    approvedDate:                    string;
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
    futurePaymentsAcceptance:        string;
    currency:                        Currency;
}

class AccountArrearsSettings {
    encodedKey:                                string;
    toleranceCalculationMethod:                string;
    dateCalculationMethod:                     string;
    nonWorkingDaysMethod:                      string;
    toleranceFloorAmount:                      number;
    tolerancePeriod:                           number;
    tolerancePercentageOfOutstandingPrincipal: number;
}

class Currency {
    currencyCode: string;
    code:         string;
}

class DisbursementDetails {
    encodedKey:               string;
    expectedDisbursementDate: string;
    firstRepaymentDate:       string;
    transactionDetails:       TransactionDetails;
    fees:                     any[];
}

class TransactionDetails {
    encodedKey:            string;
    transactionChannelKey: string;
    internalTransfer:      boolean;
}

class InterestSettings {
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

class PenaltySettings {
    loanPenaltyCalculationMethod: string;
    penaltyRate:                  number;
}

class PrepaymentSettings {
}

class ScheduleSettings {
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
}
