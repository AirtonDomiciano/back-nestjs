import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProdutosDoServicoService } from './produtos-do-servico.service';
import { ProdutosDoServico } from './entity/produtos-do-servico.entity';

@Controller('produtos-do-servico')
export class ProdutosDoServicoController {
  constructor(
    private readonly produtosDoServicoService: ProdutosDoServicoService,
  ) {}

  @Post()
  create(@Body() servicos: ProdutosDoServico): Promise<boolean> {
    return this.produtosDoServicoService.create(servicos);
  }

  @Get()
  findAll(): Promise<ProdutosDoServico[]> {
    return this.produtosDoServicoService.findAll();
  }

  @Get('buscarPorIdServico/:id')
  buscarPorIdServico(
    @Param('id') id: number,
  ): Promise<Array<ProdutosDoServico>> {
    return this.produtosDoServicoService.buscarPorIdServico(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ProdutosDoServico> {
    return this.produtosDoServicoService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() servicos: ProdutosDoServico,
  ): Promise<boolean> {
    return this.produtosDoServicoService.update(id, servicos);
  }

  @Delete('deletarPeloIdServicos/:id')
  deletarPeloIdServico(@Param('id') id: number): Promise<boolean> {
    return this.produtosDoServicoService.deletarPeloIdServico(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.produtosDoServicoService.remove(id);
  }
}
