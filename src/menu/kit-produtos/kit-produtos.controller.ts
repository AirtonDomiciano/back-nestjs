import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { KitProdutosService } from './kit-produtos.service';
import { KitProdutos } from './entity/kit-produtos.entity';

@Controller('kitprodutos')
export class KitProdutosController {
  constructor(private readonly kitProdutosService: KitProdutosService) {}

  @Post()
  create(@Body() kitProdutos: KitProdutos): Promise<boolean> {
    return this.kitProdutosService.create(kitProdutos);
  }

  @Get()
  findAll(): Promise<KitProdutos[]> {
    return this.kitProdutosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<KitProdutos> {
    return this.kitProdutosService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() kitProdutos: KitProdutos,
  ): Promise<boolean> {
    return this.kitProdutosService.update(id, kitProdutos);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.kitProdutosService.remove(id);
  }
}
