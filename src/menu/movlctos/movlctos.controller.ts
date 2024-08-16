import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { MovLctosService } from './movlctos.service';
import { MovLctos } from './entity/movlctos.entity';

@Controller('movlctos')
export class MovLctosController {
  constructor(private readonly movLctosService: MovLctosService) {}

  @Post('/salvarPagamento/:id')
  salvarPagamento(
    @Param('id') id: number,
    @Body() obj: MovLctos,
  ): Promise<boolean> {
    return this.movLctosService.salvarPagamento(id, obj);
  }

  @Post()
  create(@Body() movLctos: MovLctos): Promise<boolean> {
    return this.movLctosService.create(movLctos);
  }

  @Get()
  findAll(): Promise<MovLctos[]> {
    return this.movLctosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<MovLctos> {
    return this.movLctosService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() movLctos: MovLctos,
  ): Promise<boolean> {
    return this.movLctosService.update(id, movLctos);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.movLctosService.remove(id);
  }
}
