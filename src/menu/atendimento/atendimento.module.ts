import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atendimento } from './entity/atendimento.entity';
import { AtendimentoController } from './atendimento.controller';
import { AtendimentoService } from './atendimento.service';
import { ServicosModule } from '../servicos/servicos.module';
import { HorarioServicoModule } from '../horario-servico/horario-servico.module';
import { ContasReceberModule } from '../contas-receber/contas-receber.module';
import { ParcelasModule } from '../parcelas/parcelas.module';
import { MovimentacoesModule } from '../movlctos/movimentacoes.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Atendimento]),
    ServicosModule,
    HorarioServicoModule,
    ContasReceberModule,
    ParcelasModule,
    MovimentacoesModule,
  ],
  controllers: [AtendimentoController],
  providers: [AtendimentoService],
})
export class AtendimentoModule {}
