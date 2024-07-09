import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosServico } from './entity/produtos-servico.entity';
import { ProdutosServicoController } from './produtos-servico.controller';
import { ProdutosServicoService } from './produtos-servico.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutosServico])],
  controllers: [ProdutosServicoController],
  providers: [ProdutosServicoService],
})
export class ProdutosServicoModule {}
