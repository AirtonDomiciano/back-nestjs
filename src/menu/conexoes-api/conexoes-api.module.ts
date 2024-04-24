import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConexoesApi } from './entities/conexoes-api.entity';
import { ConexoesApiService } from './conexoes-api.service';
import { ConexoesApiController } from './conexoes-api.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ConexoesApi])],
  controllers: [ConexoesApiController],
  providers: [ConexoesApiService],
})
export class ConexoesApiModule {}
