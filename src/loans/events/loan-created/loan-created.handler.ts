import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';

import { LoanCreatedEvent } from './loan-created.event';
import { LoanCreateRepository } from '../../database/loan.repository';

@EventsHandler(LoanCreatedEvent)
export class LoanCreatedHandler implements IEventHandler {
  constructor(
    private readonly loanCreatedRepository: LoanCreateRepository
    
    ) {}
  async handle(event: LoanCreatedEvent) {
    const logger = new Logger(LoanCreatedHandler.name);
    logger.log(
      `${event.productName} :: Total amount: ${event.loanAmount} :: Client: ${event.clientKey}`,
    );

    const loanCreated = await this.loanCreatedRepository.create({
      encodekey: event.productKey,
      loanName: event.productName,
      accountHolderKey: event.clientKey,
      loanAmount: event.loanAmount,
    });        
  }
}
