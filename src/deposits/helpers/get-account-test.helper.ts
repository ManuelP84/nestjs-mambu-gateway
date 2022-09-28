import { CreateDepositAccountDto } from '../dto';

export const getAccountTest = (): CreateDepositAccountDto => {
  return {
    accountHolderKey: '',
    accountHolderType: 'CLIENT',
    name: 'Cuenta AHO test',
    productTypeKey: '8a44a104833da611018346fd57e651b6',
    accountState: 'APPROVED',
    notes: 'Test account created via nestjs middleware saga',
    accountType: 'REGULAR_SAVINGS',
    currencyCode: 'COP',
  };
};
