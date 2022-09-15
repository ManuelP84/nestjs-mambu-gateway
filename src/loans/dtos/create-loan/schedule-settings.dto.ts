import { IsNumber, IsOptional, IsString } from "class-validator";
import { isString } from "util";
import { BillingCycle, PaymentPlan, PreviewSchedule } from ".";

export class ScheduleSettings {
  @IsOptional()
  billingCycle: BillingCycle
  
  @IsOptional()
  defaultFirstRepaymentDueDateOffset: number
  
  @IsOptional()
  fixedDaysOfMonth: number[]
  
  @IsNumber()
  gracePeriod: number
  
  @IsOptional()
  gracePeriodType: string
  
  @IsOptional()
  hasCustomSchedule: boolean
  
  @IsOptional()
  paymentPlan: PaymentPlan[]
  
  @IsOptional()
  periodicPayment: number
  
  @IsOptional()
  previewSchedule: PreviewSchedule
  
  @IsOptional()
  principalRepaymentInterval: number
  
  @IsNumber()
  repaymentInstallments: number
  
  @IsNumber()
  repaymentPeriodCount: number
  
  @IsString()
  repaymentPeriodUnit: string
  
  @IsString()
  repaymentScheduleMethod: string
  
  @IsString()
  scheduleDueDatesMethod: string
  
  @IsOptional()
  shortMonthHandlingMethod: string;
}
