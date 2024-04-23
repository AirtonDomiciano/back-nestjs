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
import { Cidades } from './entities/cidades.entity';
  
  @Controller('CIDADES')
  export class CidadesController {
    constructor(private readonly cidadesService: CidadesService) {}
  
    @Post()
    create(@Body() cidades: Cidades): Promise<Cidades> {
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
    update(
      @Param('id') id: number,
      @Body() cidades: Cidades,
    ): Promise<Cidades> {
      return this.cidadesService.update(id, cidades);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
      return this.cidadesService.remove(id);
    }
  }
  