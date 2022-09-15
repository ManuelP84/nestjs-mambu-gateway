import { ConfigService } from '@nestjs/config';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AxiosAdapter } from '../../../common/providers/axios.adapter';
import { ChangeStateCommand } from './change-state.command';
import { getHeaders } from '../../../common/helpers';
import { ResponseChangeStateDto } from '../../dtos';
import { Logger } from '@nestjs/common';

@CommandHandler(ChangeStateCommand)
export class ChangeStateHandler implements ICommandHandler {
  constructor(
    public readonly configService: ConfigService,
    private readonly axios: AxiosAdapter,
  ) {}
  async execute(command: ChangeStateCommand): Promise<ResponseChangeStateDto> {
    const logger = new Logger(ChangeStateHandler.name);
    const { changeStateDto } = command;
    const { loanAccountId } = command;
    const changeStateUrl = `${this.configService.get('urlLoans')}/${loanAccountId}:changeState`;
    const headers = getHeaders(this.configService);
    const data = await this.axios.post<ResponseChangeStateDto>(
      changeStateUrl,
      changeStateDto,
      {
        headers,
        baseURL: this.configService.get('baseUrl'),
      },
    );
    if(!!data) logger.log(`Product state changed :: ${data.accountState}`);
    
    return data;
  }

}
