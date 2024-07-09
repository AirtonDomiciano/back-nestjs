import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosDoServico } from './entity/produtos-do-servico.entity';
import { ProdutosDoServicoService } from './produtos-do-servico.service';
import { ProdutosDoServicoController } from './produtos-do-servico.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutosDoServico])],
  controllers: [ProdutosDoServicoController],
  providers: [ProdutosDoServicoService],
})
export class ProdutosDoServicosModule {}
