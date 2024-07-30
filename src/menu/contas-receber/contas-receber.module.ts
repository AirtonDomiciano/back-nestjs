import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContasReceber } from './entity/contas-receber.entity';
import { ContasReceberController } from './contas-receber.controller';
import { ContasReceberService } from './contas-receber.service';
@Module({
  imports: [TypeOrmModule.forFeature([ContasReceber])],
  controllers: [ContasReceberController],
  providers: [ContasReceberService],
})
export class ContasReceberModule {}
