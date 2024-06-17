import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosAtendimento } from './entity/produtos-atendimento.entity';
import { ProdutosAtendimentoController } from './produtos-atendimento.controller';
import { ProdutosAtendimentoService } from './produtos-atendimento.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutosAtendimento])],
  controllers: [ProdutosAtendimentoController],
  providers: [ProdutosAtendimentoService],
})
export class ProdutosAtendimentoModule {}
