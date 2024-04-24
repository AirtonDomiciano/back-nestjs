import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apis } from './entities/apis.entity';
import { ApisService } from './apis.service';
import { ApisController } from './apis.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Apis])],
  controllers: [ApisController],
  providers: [ApisService],
})
export class ApisModule {}
