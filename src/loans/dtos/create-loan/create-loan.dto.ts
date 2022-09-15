import { Type } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import {
  AccountArrearsSettings,
  Asset,
  CreateLoanDtoDisbursementDetails,
  Currency,
  ExampleCustomFields,
  FundingSource,
  Guarantor,
  InstallmentsLoanAccounts,
  InterestSettings,
  OthersLoanAccounts,
  PenaltySettings,
  PlannedInstallmentFee,
  PrepaymentSettings,
  PrincipalPaymentSettings,
  RedrawSettings,
  ScheduleSettings,
  Tranch,
  _Informacion_Adicional,
} from '.';

export class CreateLoanDto {
  @IsOptional()
  _Example_Custom_Fields: ExampleCustomFields;

  @IsOptional()
  _Installments_Loan_Accounts: InstallmentsLoanAccounts;

  @IsOptional()
  _Others_Loan_Accounts: OthersLoanAccounts;

  @IsOptional()
  accountArrearsSettings: AccountArrearsSettings;

  @IsString()
  accountHolderKey: string;

  @IsString()
  accountHolderType: string;

  @IsOptional()
  accountState: string;

  accountSubState: string;

  @IsOptional()
  accruedInterest: number;

  @IsOptional()
  accruedPenalty: number;

  @IsOptional()
  activationTransactionKey: string;

  @IsOptional()
  allowOffset: boolean;

  @IsOptional()
  approvedDate: string;

  @IsOptional()
  arrearsTolerancePeriod: number;

  @IsOptional()
  assets: Asset[];

  @IsOptional()
  assignedBranchKey: string;

  @IsOptional()
  assignedCentreKey: string;

  @IsOptional()
  assignedUserKey: string;

  @IsOptional()
  balances: { [key: string]: number };

  @IsOptional()
  closedDate: string;

  @IsOptional()
  creationDate: string;

  @IsOptional()
  creditArrangementKey: string;

  @IsOptional()
  currency: Currency;

  @IsOptional()
  daysInArrears: number;

  @IsOptional()
  daysLate: number;

  @ValidateNested()
  @Type(() => CreateLoanDtoDisbursementDetails)
  disbursementDetails: CreateLoanDtoDisbursementDetails;

  encodedKey: string;

  @IsOptional()
  fundingSources: FundingSource[];

  @IsOptional()
  futurePaymentsAcceptance: string;

  @IsOptional()
  guarantors: Guarantor[];

  @IsOptional()
  id: string;

  @IsOptional()
  interestAccruedInBillingCycle: number;

  @IsOptional()
  interestCommission: number;

  @IsOptional()
  interestFromArrearsAccrued: number;

  @ValidateNested()
  @Type(() => InterestSettings)
  interestSettings: InterestSettings;

  @IsOptional()
  lastAccountAppraisalDate: string;

  @IsOptional()
  lastInterestAppliedDate: string;

  @IsOptional()
  lastInterestReviewDate: string;

  @IsOptional()
  lastLockedDate: string;

  @IsOptional()
  lastModifiedDate: string;

  @IsOptional()
  lastSetToArrearsDate: string;

  @IsOptional()
  lastTaxRateReviewDate: string;

  @IsOptional()
  latePaymentsRecalculationMethod: string;

  @IsNumber()
  loanAmount: number;

  @IsOptional()
  loanName: string;

  @IsOptional()
  lockedOperations: string[];

  @IsOptional()
  migrationEventKey: string;

  @IsOptional()
  modifyInterestForFirstInstallment: boolean;

  @IsOptional()
  notes: string;

  @IsOptional()
  originalAccountKey: string;

  @IsOptional()
  paymentHolidaysAccruedInterest: number;

  @IsOptional()
  paymentMethod: string;

  @IsOptional()
  penaltySettings: PenaltySettings;

  @IsOptional()
  plannedInstallmentFees: PlannedInstallmentFee[];

  @IsOptional()
  prepaymentSettings: PrepaymentSettings;

  @IsOptional()
  principalPaymentSettings: PrincipalPaymentSettings;

  @IsString()
  productTypeKey: string;

  @IsOptional()
  redrawSettings: RedrawSettings;

  @IsOptional()
  rescheduledAccountKey: string;

  @ValidateNested()
  @Type(() => ScheduleSettings)
  scheduleSettings: ScheduleSettings;

  @IsOptional()
  settlementAccountKey: string;

  @IsOptional()
  taxRate: number;

  @IsOptional()
  terminationDate: string;

  @IsOptional()
  tranches: Tranch[];

  @ValidateNested()
  @Type(() => _Informacion_Adicional)
  _Informacion_Adicional: _Informacion_Adicional;
}

// class ExampleCustomFields {
//     exampleCheckboxField: string;
//     exampleFreeTextField: string;
//     exampleNumberField:   string;
//     exampleSelectField:   string;
// }

// class InstallmentsLoanAccounts {
//     Has_Many_Installments_Loan_Accou: string;
//     Special_Installments_Loan_Accoun: string;
// }

// class OthersLoanAccounts {
//     Family_Members_Loan_Accounts: string;
//     Repayment_Loan_Accounts:      string;
// }

// class AccountArrearsSettings {
//     dateCalculationMethod:                     string;
//     encodedKey:                                string;
//     monthlyToleranceDay:                       number;
//     nonWorkingDaysMethod:                      string;
//     toleranceCalculationMethod:                string;
//     toleranceFloorAmount:                      number;
//     tolerancePercentageOfOutstandingPrincipal: number;
//     tolerancePeriod:                           number;
// }

// class Asset {
//     _Asset_Default_Assets: AssetDefaultAssets;
//     amount:                number;
//     assetName:             string;
//     depositAccountKey:     string;
//     encodedKey:            string;
//     guarantorKey:          string;
//     guarantorType:         string;
//     originalAmount:        number;
//     originalCurrency:      Currency;
// }

// class AssetDefaultAssets {
//     Example_Checkbox_Field_Assets:  string;
//     Example_Free_Text_Field_Assets: string;
//     Example_Number_Field_Assets:    string;
//     Example_Select_Field_Assets:    string;
// }

// class Currency {
//     code: string;
// }

// class CreateLoanDtoDisbursementDetails {
//     disbursementDate:         string;
//     encodedKey:               string;
//     expectedDisbursementDate: string;
//     fees:                     Fee[];
//     firstRepaymentDate:       string;
//     transactionDetails:       TransactionDetails;
// }

// class Fee {
//     amount:                  number;
//     encodedKey:              string;
//     predefinedFeeEncodedKey: string;
// }

// class TransactionDetails {
//     encodedKey:              string;
//     internalTransfer:        boolean;
//     targetDepositAccountKey: string;
//     transactionChannelId:    string;
//     transactionChannelKey:   string;
// }

// class FundingSource {
//     amount:             number;
//     assetName:          string;
//     depositAccountKey:  string;
//     encodedKey:         string;
//     guarantorKey:       string;
//     guarantorType:      string;
//     id:                 string;
//     interestCommission: number;
//     sharePercentage:    number;
// }

// class Guarantor {
//     _Guarantor_Default_Guarantors: GuarantorDefaultGuarantors;
//     amount:                        number;
//     assetName:                     string;
//     depositAccountKey:             string;
//     encodedKey:                    string;
//     guarantorKey:                  string;
//     guarantorType:                 string;
// }

// class GuarantorDefaultGuarantors {
//     Example_Checkbox_Guarantors:     string;
//     Example_Free_Text_Guarantors:    string;
//     Example_Number_Field_Guarantors: string;
//     Example_Select_Field_Guarantors: string;
// }

// class InterestSettings {
//     accountInterestRateSettings:      AccountInterestRateSetting[];
//     accrueInterestAfterMaturity:      boolean;
//     accrueLateInterest:               boolean;
//     interestApplicationMethod:        string;
//     interestBalanceCalculationMethod: string;
//     interestCalculationMethod:        string;
//     interestChargeFrequency:          string;
//     interestRate:                     number;
//     interestRateReviewCount:          number;
//     interestRateReviewUnit:           string;
//     interestRateSource:               string;
//     interestSpread:                   number;
//     interestType:                     string;
// }

// class AccountInterestRateSetting {
//     encodedKey:               string;
//     indexSourceKey:           string;
//     interestRate:             number;
//     interestRateCeilingValue: number;
//     interestRateFloorValue:   number;
//     interestRateReviewCount:  number;
//     interestRateReviewUnit:   string;
//     interestRateSource:       string;
//     interestSpread:           number;
//     validFrom:                string;
// }

// class PenaltySettings {
//     loanPenaltyCalculationMethod: string;
//     penaltyRate:                  number;
// }

// class PlannedInstallmentFee {
//     amount:            number;
//     applyOnDate:       string;
//     encodedKey:        string;
//     installmentKey:    string;
//     installmentNumber: number;
//     predefinedFeeKey:  string;
// }

// class PrepaymentSettings {
//     applyInterestOnPrepaymentMethod: string;
//     elementsRecalculationMethod:     string;
//     prepaymentRecalculationMethod:   string;
//     principalPaidInstallmentStatus:  string;
// }

// class PrincipalPaymentSettings {
//     amount:                       number;
//     encodedKey:                   string;
//     includeFeesInFloorAmount:     boolean;
//     includeInterestInFloorAmount: boolean;
//     percentage:                   number;
//     principalCeilingValue:        number;
//     principalFloorValue:          number;
//     principalPaymentMethod:       string;
//     totalDueAmountFloor:          number;
//     totalDuePayment:              string;
// }

// class RedrawSettings {
//     restrictNextDueWithdrawal: boolean;
// }

// class ScheduleSettings {
//     billingCycle:                       BillingCycle;
//     defaultFirstRepaymentDueDateOffset: number;
//     fixedDaysOfMonth:                   number[];
//     gracePeriod:                        number;
//     gracePeriodType:                    string;
//     hasCustomSchedule:                  boolean;
//     paymentPlan:                        PaymentPlan[];
//     periodicPayment:                    number;
//     previewSchedule:                    PreviewSchedule;
//     principalRepaymentInterval:         number;
//     repaymentInstallments:              number;
//     repaymentPeriodCount:               number;
//     repaymentPeriodUnit:                string;
//     repaymentScheduleMethod:            string;
//     scheduleDueDatesMethod:             string;
//     shortMonthHandlingMethod:           string;
// }

// class BillingCycle {
//     days: number[];
// }

// class PaymentPlan {
//     amount:        number;
//     encodedKey:    string;
//     toInstallment: number;
// }

// class PreviewSchedule {
//     numberOfPreviewedInstalments: number;
// }

// class Tranch {
//     amount:              number;
//     disbursementDetails: TranchDisbursementDetails;
//     encodedKey:          string;
//     fees:                Fee[];
//     trancheNumber:       number;
// }

// class TranchDisbursementDetails {
//     disbursementTransactionKey: string;
//     expectedDisbursementDate:   string;
// }
