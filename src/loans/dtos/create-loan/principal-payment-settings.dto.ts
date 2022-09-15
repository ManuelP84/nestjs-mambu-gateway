export class PrincipalPaymentSettings {
  amount: number;
  encodedKey: string;
  includeFeesInFloorAmount: boolean;
  includeInterestInFloorAmount: boolean;
  percentage: number;
  principalCeilingValue: number;
  principalFloorValue: number;
  principalPaymentMethod: string;
  totalDueAmountFloor: number;
  totalDuePayment: string;
}
