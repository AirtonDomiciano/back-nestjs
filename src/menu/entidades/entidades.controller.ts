import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
  } from '@nestjs/common';
import { EntidadesService } from './entidades.service';
import { Entidades } from './entities/entidades.entity';
  
  @Controller('entidades')
  export class EntidadesController {
    constructor(private readonly entidadesService: EntidadesService) {}
  
    @Post()
    create(@Body() entidade: Entidades): Promise<Entidades> {
      return this.entidadesService.create(entidade);
    }
  
    @Get()
    findAll(): Promise<Entidades[]> {
      return this.entidadesService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Entidades> {
      return this.entidadesService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() entidade: Entidades): Promise<Entidades> {
      return this.entidadesService.update(id, entidade);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
      return this.entidadesService.remove(id);
    }
  }
  