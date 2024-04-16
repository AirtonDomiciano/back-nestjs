import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosService } from './produtos.service';
import { Produtos } from './entities/produtos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produtos])],
  controllers: [ProdutosService],
  providers: [ProdutosService],
})
export class UserModule {}
