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