import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { CreateClientDto } from './dto/create-client/create-client.dto';
import { ResponseClientDto } from './dto/response-client.dto';
import { CreateClientCommand } from './commands/create-client/create-client.command';
import { GetClientsQuery } from './queries/get-clients/get-clients.query';
import { CreateClientLoanCommand } from './commands/create-client-loan/create-client-loan.command';
import { CreateClientLoanDto } from './dto/create-client-loan/create-client-loan.dto';
import { Client } from './entities/client/client.entity';
import { Auth } from '../auth/decorators';
import { ValidRoles } from '../auth/enums';

@Controller('clients')
export class ClientsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  @Auth(ValidRoles.user)
  async createClient(
    @Body() createClientDto: CreateClientDto,
  ): Promise<Client> {
    /**
     * Create a new client
     */
    return await this.commandBus.execute<CreateClientCommand, Client>(
      new CreateClientCommand(createClientDto),
    );
  }

  @Post('loan')
  @Auth(ValidRoles.user)
  async createClientLoan(
    @Body() createClientLoanDto: CreateClientLoanDto,
  ) {
    /**
     * Create a new client and asign a loan account
     */
    await this.commandBus.execute<CreateClientLoanCommand, void>(
      new CreateClientLoanCommand(createClientLoanDto),
    );
  }

  @Get()
  @Auth(ValidRoles.user)
  findAll(): Promise<ResponseClientDto[]> {
    /**
     * Retrive all clients
     */
    return this.queryBus.execute<GetClientsQuery, ResponseClientDto[]>(
      new GetClientsQuery(),
    );
  }
}
