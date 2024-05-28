import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Clientes } from './entities/clientes.entity';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() cliente: Clientes): Promise<boolean> {
    return this.clientesService.create(cliente);
  }

  @Get()
  findAll(): Promise<Clientes[]> {
    return this.clientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Clientes> {
    return this.clientesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() cliente: Clientes): Promise<boolean> {
    return this.clientesService.update(id, cliente);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.clientesService.remove(id);
  }
}
