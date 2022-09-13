import { CreateClientHandler } from "./create-client/create-client.handler";
import { CreateClientLoanHandler } from './create-client-loan/create-client-loan.handler';

export * from './create-client/create-client.command';
export const  ClientCommandHandlers = [CreateClientHandler, CreateClientLoanHandler];