import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoServico } from './entity/tipo-servico.entity';
import { TipoServicoService } from './tipo-servico.services';
import { TipoServicoController } from './tipo-servico.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TipoServico])],
  controllers: [TipoServicoController],
  providers: [TipoServicoService],
})
export class TipoServicoModule {}
