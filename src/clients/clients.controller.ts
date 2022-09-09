import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ResponseClientDto } from './dto/response-client.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto):Promise<ResponseClientDto> {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  findAll():Promise<ResponseClientDto[]> {
    return this.clientsService.findAll();
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
