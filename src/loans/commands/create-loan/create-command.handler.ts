import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateLoanCommand } from './create-loan.command';
import { ConfigService } from '@nestjs/config';
import { AxiosAdapter } from '../../../common/providers/axios.adapter';
import { ResponseLoanDto } from '../../dtos';
import { LoanFactory } from '../../factories/create-loan.factory';
import { Loan } from '../../entities/loan/loan.entity';

@CommandHandler(CreateLoanCommand)
export class CreateLoanHandler implements ICommandHandler {
  constructor(
    public readonly configService: ConfigService,
    private readonly axios: AxiosAdapter,
    private readonly eventPublisher: EventPublisher,
    private readonly loanFactory: LoanFactory,
  ) {}

  async execute(command: CreateLoanCommand): Promise<Loan> {
    const { createLoanDto } = command;
    const headers = {
      apikey: this.configService.get('apyKey'),
      Accept: 'application/vnd.mambu.v2+json',
      'Content-Type': 'application/json',
    };

    const data = await this.axios.post<ResponseLoanDto>(
      this.configService.get('urlLoans'),
      createLoanDto,
      {
        headers,
        baseURL: this.configService.get('baseUrl'),
      },
    );

    const loan = this.eventPublisher.mergeObjectContext(
      this.loanFactory.create(data),
    );

    loan.commit();

    return loan;
  }
}
