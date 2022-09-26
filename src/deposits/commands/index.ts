import { CreateDepositAccountHandler } from './accounts/create-deposit-account/create-deposit-account.handler';
import { DepositTransactionHandler } from './transactions/deposit-transaction/deposit-transaction.handler';
import { WithdrawalTransactionHandler } from './transactions/withdrawal-transaction/withdrawal-transaction.handler';

// Commands
export * from './accounts/create-deposit-account/created-deposit-account.command';
export * from './transactions/deposit-transaction/deposit-transaction.command';
export * from './transactions/transfer-transaction/transfer-transaction.command';
export * from './transactions/withdrawal-transaction/withdrawal-transaction.command';

// Handlers
export const depositTransactionHandlers = [
  CreateDepositAccountHandler,
  DepositTransactionHandler,
  WithdrawalTransactionHandler,
];
