import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovLctos } from './entity/movlctos.entity';
import { MovLctosService } from './movlctos.service';
import { MovLctosController } from './movlctos.controller';
import { ContasReceberModule } from '../contas-receber/contas-receber.module';

@Module({
  imports: [TypeOrmModule.forFeature([MovLctos]), ContasReceberModule],
  controllers: [MovLctosController],
  exports: [MovLctosService],
  providers: [MovLctosService],
})
export class MovLctosModule {}
