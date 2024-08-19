import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { MovimentacoesService } from './movimentacoes.service';
import { Movimentacoes } from './entity/movimentacoes.entity';

@Controller('movimentacoes')
export class MovimentacoesController {
  constructor(private readonly movimentacoesService: MovimentacoesService) {}

  @Post('/salvarPagamento/:id')
  salvarPagamento(
    @Param('id') id: number,
    @Body() obj: Movimentacoes,
  ): Promise<boolean> {
    return this.movimentacoesService.salvarPagamento(id, obj);
  }

  @Post()
  create(@Body() movimentacoes: Movimentacoes): Promise<boolean> {
    return this.movimentacoesService.create(movimentacoes);
  }

  @Get()
  findAll(): Promise<Movimentacoes[]> {
    return this.movimentacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Movimentacoes> {
    return this.movimentacoesService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() movimentacoes: Movimentacoes,
  ): Promise<boolean> {
    return this.movimentacoesService.update(id, movimentacoes);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.movimentacoesService.remove(id);
  }
}
