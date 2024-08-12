import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorarioServico } from './entity/horario-servico.entity';
import { HorarioServicoController } from './horario-servico.controller';
import { HorarioServicoService } from './horario-servico.service';

@Module({
  imports: [TypeOrmModule.forFeature([HorarioServico])],
  controllers: [HorarioServicoController],
  exports: [HorarioServicoService],
  providers: [HorarioServicoService],
})
export class HorarioServicoModule {}
