import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cidades } from './entities/cidades.entity';
import { CidadesController } from './cidades.controller';
import { CidadesService } from './cidades.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cidades])],
  controllers: [CidadesController],
  providers: [CidadesService],
})
export class CidadesModule {}
