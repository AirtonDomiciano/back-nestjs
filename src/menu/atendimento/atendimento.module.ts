import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atendimento } from './entity/atendimento.entity';
import { AtendimentoController } from './atendimento.controller';
import { AtendimentoService } from './atendimento.service';

@Module({
  imports: [TypeOrmModule.forFeature([Atendimento])],
  controllers: [AtendimentoController],
  providers: [AtendimentoService],
})
export class AtendimentoModule {}
