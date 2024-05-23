import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosService } from './produtos.service';
import { Produtos } from './entities/produtos.entity';
import { ProdutosController } from './produtos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Produtos])],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
