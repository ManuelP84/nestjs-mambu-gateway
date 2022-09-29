import { v4 as uuid } from 'uuid';
import { TransferTransactionDto } from '../dto/transactions/transfer-transaction.dto';

export const getTransferTest = (): TransferTransactionDto => {
  return {
    amount: 200000,
    transferDetails: {
      linkedAccountType: 'DEPOSIT',
      linkedAccountId: '',
      linkedAccountKey: '',
    },
    notes: 'Initial transfer created via nestjs middleware saga',
    paymentOrderId: '202230000050',
    externalId: uuid(),
  };
};
