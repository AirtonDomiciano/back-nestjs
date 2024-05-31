import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CidadesService } from './cidades.service';
import { Cidades } from './entity/cidades.entity';

@Controller('cidades')
export class CidadesController {
  constructor(private readonly cidadesService: CidadesService) {}

  @Post()
  create(@Body() cidades: Cidades): Promise<boolean> {
    return this.cidadesService.create(cidades);
  }

  @Get()
  findAll(): Promise<Cidades[]> {
    return this.cidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Cidades> {
    return this.cidadesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() cidades: Cidades): Promise<boolean> {
    return this.cidadesService.update(id, cidades);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.cidadesService.remove(id);
  }
}
