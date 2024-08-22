import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContasReceberModule } from '../contas-receber/contas-receber.module';
import { Movimentacoes } from './entity/movimentacoes.entity';
import { MovimentacoesController } from './movimentacoes.controller';
import { MovimentacoesService } from './movimentacoes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Movimentacoes]), ContasReceberModule],
  controllers: [MovimentacoesController],
  exports: [MovimentacoesService],
  providers: [MovimentacoesService],
})
export class MovimentacoesModule {}
