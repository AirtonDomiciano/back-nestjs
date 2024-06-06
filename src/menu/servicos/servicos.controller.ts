import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Servicos } from './entity/servicos.entity';
import { ServicosService } from './servicos.service';

@Controller('servicos')
export class ServicosController {
  constructor(private readonly servicosService: ServicosService) {}

  @Post()
  create(@Body() servicos: Servicos): Promise<boolean> {
    return this.servicosService.create(servicos);
  }

  @Get()
  findAll(): Promise<Servicos[]> {
    return this.servicosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Servicos> {
    return this.servicosService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() servicos: Servicos,
  ): Promise<boolean> {
    return this.servicosService.update(id, servicos);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.servicosService.remove(id);
  }
}
