import { CreateClientHandler } from "./create-client/create-client.handler";
import { CreateClientLoanHandler } from './create-client-loan/create-client-loan.handler';

// Handlers
export const  ClientCommandHandlers = [CreateClientHandler, CreateClientLoanHandler];

// Commands
export * from './create-client/create-client.command';
export * from './create-client-loan/create-client-loan.command';