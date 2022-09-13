import { ClientCreatedHandler } from "./client-created/client-created.handler";
import { ClientLoanCreatedHandler } from './client-loan-created/client-loan-created.handler';

export const ClientEventHandlers = [ClientCreatedHandler, ClientLoanCreatedHandler];
export * from './client-created/client-created.event'