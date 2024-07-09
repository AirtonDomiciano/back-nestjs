import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicosAnimal } from './entity/servicos-animal.entity';
import { ServicosAnimalService } from './servicos-animal.services';
import { ServicosAnimaloController } from './servicos-animal.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ServicosAnimal])],
  controllers: [ServicosAnimaloController],
  providers: [ServicosAnimalService],
})
export class ServicosAnimalModule {}
