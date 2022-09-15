import { AssetDefaultAssets, Currency } from ".";

export class Asset {
  _Asset_Default_Assets: AssetDefaultAssets;
  amount: number;
  assetName: string;
  depositAccountKey: string;
  encodedKey: string;
  guarantorKey: string;
  guarantorType: string;
  originalAmount: number;
  originalCurrency: Currency;
}
