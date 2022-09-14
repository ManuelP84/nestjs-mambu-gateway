import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client/create-client.dto';
import { ResponseClientDto } from './dto/response-client.dto';
import { CreateClientCommand } from './commands/create-client/create-client.command';
import { GetClientsQuery } from './queries/get-clients/get-clients.query';
import { CreateClientLoanCommand } from './commands/create-client-loan/create-client-loan.command';
import { CreateClientLoanDto } from './dto/create-client-loan/create-client-loan.dto';
import { Client } from './entities/client/client.entity';

@Controller('clients')
export class ClientsController {
  constructor(
    //private readonly clientsService: ClientsService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createClient(
    @Body() createClientDto: CreateClientDto,
  ): Promise<Client> {
    /**
     * Create a new client
     */
    return await this.commandBus.execute<CreateClientCommand, Client>(
      new CreateClientCommand(createClientDto),
    );
    // return this.clientsService.create(createClientDto);
  }

  @Post('loan')
  async createClientLoan(
    @Body() createClientLoanDto: CreateClientLoanDto,
  ): Promise<void> {
    /**
     * Create a new client and asign a loan account
     */
    await this.commandBus.execute<CreateClientLoanCommand, void>(
      new CreateClientLoanCommand(createClientLoanDto),
    );
    // return this.clientsService.create(createClientDto);
  }

  @Get()
  findAll(): Promise<ResponseClientDto[]> {
    /**
     * Retrive all clients
     */
    return this.queryBus.execute<GetClientsQuery, ResponseClientDto[]>(
      new GetClientsQuery(),
    );
    // return this.clientsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.clientsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
  //   return this.clientsService.update(+id, updateClientDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.clientsService.remove(+id);
  // }
}
