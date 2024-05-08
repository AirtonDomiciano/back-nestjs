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
  create(@Body() produto: Produtos): Promise<Produtos> {
    return this.produtosService.create(produto);
  }

  @Get()
  findAll(): Promise<Produtos[]> {
    return this.produtosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Produtos> {
    return this.produtosService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() produto: Produtos,
  ): Promise<Produtos> {
    return this.produtosService.update(id, produto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.produtosService.remove(id);
  }
}
