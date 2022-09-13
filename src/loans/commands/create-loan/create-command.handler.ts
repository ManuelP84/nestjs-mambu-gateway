import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateLoanCommand } from './create-loan.command';
import { ConfigService } from '@nestjs/config';
import { AxiosAdapter } from '../../../common/providers/axios.adapter';
import { ResponseLoanDto } from '../../dtos/response.loan.dto';

@CommandHandler(CreateLoanCommand)
export class CreateLoanHandler implements ICommandHandler {
  constructor(
    public readonly configService: ConfigService,
    private readonly axios: AxiosAdapter,
  ) {}

  async execute(command: CreateLoanCommand): Promise<void> {
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
  }
}
