import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { Produtos } from './entities/produtos.entity';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  create(@Body() produto: Produtos): Promise<boolean> {
    return this.produtosService.create(produto);
  }

  @Get()
  findAll(): Promise<Produtos[]> {
    return this.produtosService.findAll();
  }

  @Get('buscarTodosComEstoque')
  buscarTodosComEstoque(): Promise<Array<Produtos>> {
    return this.produtosService.buscarTodosComEstoque();
  }

  @Get('buscarAtivosInativos/:ativo')
  buscarAtivosInativos(
    @Param('ativo') ativo: boolean,
  ): Promise<Array<Produtos>> {
    return this.produtosService.buscarAtivosInativos(ativo);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Produtos> {
    return this.produtosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() produto: Produtos): Promise<boolean> {
    return this.produtosService.update(id, produto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.produtosService.remove(id);
  }
}
