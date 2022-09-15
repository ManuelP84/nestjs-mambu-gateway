import { Fee, TranchDisbursementDetails } from ".";

export class Tranch {
  amount: number;
  disbursementDetails: TranchDisbursementDetails;
  encodedKey: string;
  fees: Fee[];
  trancheNumber: number;
}
