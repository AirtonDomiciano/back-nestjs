import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormasPagamento } from './entity/formas-de-pagamento.entity';
import { FormasPagamentoController } from './formas-de-pagamento.controller';
import { FormasPagamentoService } from './formas-de-pagamento.service';

@Module({
  imports: [TypeOrmModule.forFeature([FormasPagamento])],
  controllers: [FormasPagamentoController],
  providers: [FormasPagamentoService],
})
export class FormasPagamentoModule {}
