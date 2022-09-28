import { v4 as uuid } from 'uuid';
import { WithdrawalTransactionDto } from '../dto';

export const getWithdrawalTest = (): WithdrawalTransactionDto => {
  return {
    amount: 500000,
    transactionDetails: {
      transactionChannelId: '1055001',
    },
    notes: 'Initial withdrawal created via nestjs middleware saga',
    externalId: uuid(),
  };
};
