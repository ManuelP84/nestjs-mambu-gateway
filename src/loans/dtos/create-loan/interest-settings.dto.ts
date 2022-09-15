import { IsNumber, IsOptional } from "class-validator";
import { AccountInterestRateSetting } from ".";

export class InterestSettings {
  @IsOptional()
  accountInterestRateSettings: AccountInterestRateSetting[]
  
  @IsOptional()
  accrueInterestAfterMaturity: boolean
  
  @IsOptional()
  accrueLateInterest: boolean
  
  @IsOptional()
  interestApplicationMethod: string
  
  @IsOptional()
  interestBalanceCalculationMethod: string
  
  @IsOptional()
  interestCalculationMethod: string
  
  @IsOptional()
  interestChargeFrequency: string
  
  @IsNumber()
  interestRate: number
  
  @IsOptional()
  interestRateReviewCount: number
  
  @IsOptional()
  interestRateReviewUnit: string
  
  @IsOptional()
  interestRateSource: string
  
  @IsOptional()
  interestSpread: number
  
  @IsOptional()
  interestType: string;
}
