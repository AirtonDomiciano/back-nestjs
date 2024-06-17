import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KitProdutos } from './entity/kit-produtos.entity';
import { KitProdutosService } from './kit-produtos.service';
import { KitProdutosController } from './kit-produtos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([KitProdutos])],
  controllers: [KitProdutosController],
  providers: [KitProdutosService],
})
export class KitProdutosModule {}
