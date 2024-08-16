import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContasReceber } from './entity/contas-receber.entity';
import { ContasReceberController } from './contas-receber.controller';
import { ContasReceberService } from './contas-receber.service';
import { ServicosModule } from '../servicos/servicos.module';
import { ParcelasModule } from '../parcelas/parcelas.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([ContasReceber]),
    ServicosModule,
    ParcelasModule,
  ],
  controllers: [ContasReceberController],
  exports: [ContasReceberService],
  providers: [ContasReceberService],
})
export class ContasReceberModule {}
