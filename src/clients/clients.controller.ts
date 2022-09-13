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
import { CreateClientDto } from './dto/create-client.dto';
import { ResponseClientDto } from './dto/response-client.dto';
import { CreateClientCommand } from './commands/create-client/create-client.command';
import { GetClientsQuery } from './queries/get-clients/get-clients.query';
import { CreateClientLoanCommand } from './commands/create-client-loan/create-client-loan.command';

@Controller('clients')
export class ClientsController {
  constructor(
    //private readonly clientsService: ClientsService,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()  
  async createClient(@Body() createClientDto: CreateClientDto): Promise<void> {
    /**
   * Create a new client
   */
    await this.commandBus.execute<CreateClientCommand, void>(
      new CreateClientCommand(createClientDto),
    );
    // return this.clientsService.create(createClientDto);
  }

  @Post('loan/:id')  
  async createClientLoan(
    @Body() createClientDto: CreateClientDto,
    @Param('id') id: string,
    ): Promise<void> {
    /**
   * Create a new client
   */
    await this.commandBus.execute<CreateClientCommand, void>(
      new CreateClientLoanCommand(createClientDto, id),
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
