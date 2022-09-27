export class DepositAccountResponseDto {
    encodedKey:                string;
    creationDate:              string;
    lastModifiedDate:          string;
    id:                        string;
    name:                      string;
    notes:                     string;
    accountHolderType:         string;
    accountHolderKey:          string;
    accountState:              string;
    productTypeKey:            string;
    accountType:               string;
    approvedDate:              string;
    currencyCode:              string;
    internalControls:          InternalControls;
    overdraftSettings:         OverdraftSettings;
    interestSettings:          InterestSettings;
    overdraftInterestSettings: InternalControls;
    balances:                  { [key: string]: number };
    accruedAmounts:            AccruedAmounts;
}

interface AccruedAmounts {
    interestAccrued:                   number;
    overdraftInterestAccrued:          number;
    technicalOverdraftInterestAccrued: number;
    negativeInterestAccrued:           number;
}

interface InterestSettings {
    interestRateSettings:    InterestRateSettings;
    interestPaymentSettings: InterestPaymentSettings;
}

interface InterestPaymentSettings {
    interestPaymentPoint: string;
    interestPaymentDates: InterestPaymentDate[];
}

interface InterestPaymentDate {
    month: number;
    day:   number;
}

interface InterestRateSettings {
    encodedKey:                   string;
    interestRate:                 number;
    interestChargeFrequency:      string;
    interestChargeFrequencyCount: number;
    interestRateTiers:            any[];
    interestRateTerms:            string;
    interestRateSource:           string;
}

interface InternalControls {
}

interface OverdraftSettings {
    allowOverdraft: boolean;
    overdraftLimit: number;
}
