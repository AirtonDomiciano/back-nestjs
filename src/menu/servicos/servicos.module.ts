import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servicos } from './entity/servicos.entity';
import { ServicosController } from './servicos.controller';
import { ServicosService } from './servicos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Servicos])],
  controllers: [ServicosController],
  providers: [ServicosService],
})
export class ServicosModule {}
