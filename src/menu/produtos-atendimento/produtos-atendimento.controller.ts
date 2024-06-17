import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProdutosAtendimentoService } from './produtos-atendimento.service';
import { ProdutosAtendimento } from './entity/produtos-atendimento.entity';

@Controller('produtos-atendimento')
export class ProdutosAtendimentoController {
  constructor(
    private readonly produtosAtendimentoService: ProdutosAtendimentoService,
  ) {}

  @Post()
  create(@Body() produtosAtendimento: ProdutosAtendimento): Promise<boolean> {
    return this.produtosAtendimentoService.create(produtosAtendimento);
  }

  @Get()
  findAll(): Promise<ProdutosAtendimento[]> {
    return this.produtosAtendimentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ProdutosAtendimento> {
    return this.produtosAtendimentoService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() produtosAtendimento: ProdutosAtendimento,
  ): Promise<boolean> {
    return this.produtosAtendimentoService.update(id, produtosAtendimento);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.produtosAtendimentoService.remove(id);
  }
}
