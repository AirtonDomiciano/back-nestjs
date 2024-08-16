import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProdutosServicoService } from './produtos-servico.service';
import { ProdutosServico } from './entity/produtos-servico.entity';
@Controller('produtos-servico')
export class ProdutosServicoController {
  constructor(
    private readonly produtosServicoService: ProdutosServicoService,
  ) {}

  @Post()
  create(@Body() produtosServico: ProdutosServico): Promise<boolean> {
    return this.produtosServicoService.create(produtosServico);
  }

  @Get()
  findAll(): Promise<ProdutosServico[]> {
    return this.produtosServicoService.findAll();
  }

  @Get('buscarProdutosPorIdTipoServico/:id')
  buscarProdutosPorServicoAnimal(
    @Param('id')
    idTipoServico: number,
  ): Promise<ProdutosServico[]> {
    return this.produtosServicoService.buscarProdutosPorTipoServico(
      idTipoServico,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ProdutosServico> {
    return this.produtosServicoService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() produtosServico: ProdutosServico,
  ): Promise<boolean> {
    return this.produtosServicoService.update(id, produtosServico);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.produtosServicoService.remove(id);
  }
}
