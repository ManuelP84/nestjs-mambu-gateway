import { ClientCreatedHandler } from "./client-created/client-created.handler";
import { ClientLoanCreatedHandler } from './client-loan-created/client-loan-created.handler';

// Handlers
export const ClientEventHandlers = [ClientCreatedHandler, ClientLoanCreatedHandler];

// Events
export * from './client-created/client-created.event'
export * from './client-loan-created/client-loan-created.event';
export * from './create-client/create-client.event';