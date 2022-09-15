import { CreateLoanHandler } from './create-loan/create-command.handler';
import { ChangeStateHandler } from './change-state/change-state.handler';

export const LoansCommandsHandlers = [CreateLoanHandler, ChangeStateHandler];