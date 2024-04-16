import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entidades } from './entities/entidades.entity';
import { EntidadesService } from './entidades.service';

@Module({
  imports: [TypeOrmModule.forFeature([Entidades])],
  controllers: [EntidadesService],
  providers: [EntidadesService],
})
export class UserModule {}
