import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parcelas } from './entity/parcelas.entity';
import { ParcelasController } from './parcelas.controller';
import { ParcelasService } from './parcelas.service';
@Module({
  imports: [TypeOrmModule.forFeature([Parcelas])],
  controllers: [ParcelasController],
  exports: [ParcelasService],
  providers: [ParcelasService],
})
export class ParcelasModule {}
