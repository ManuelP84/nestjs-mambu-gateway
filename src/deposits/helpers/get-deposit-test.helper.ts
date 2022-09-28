import { v4 as uuid } from 'uuid';
import { DepositTransactionDto } from '../dto';

export const getDepositTest = (): DepositTransactionDto => {
  return {
    amount: 30000000,
    transactionDetails: {
      transactionChannelId: '1055001',
    },
    notes: 'Initial deposit created via nestjs middleware saga',
    externalId: uuid(),
    "bookingDate": "2022-09-27T09:30:50-05:00",
    "valueDate": "2022-09-27T09:30:50-05:00" 
  };
};
