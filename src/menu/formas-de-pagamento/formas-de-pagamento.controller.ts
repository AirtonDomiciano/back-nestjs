import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { FormasPagamento } from './entity/formas-de-pagamento.entity';
import { FormasPagamentoService } from './formas-de-pagamento.service';

@Controller('formas-pagamento')
export class FormasPagamentoController {
  constructor(
    private readonly formasPagamentoService: FormasPagamentoService,
  ) {}

  @Post()
  create(@Body() formaPagamento: FormasPagamento): Promise<boolean> {
    return this.formasPagamentoService.create(formaPagamento);
  }

  @Get()
  findAll(): Promise<FormasPagamento[]> {
    return this.formasPagamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<FormasPagamento> {
    return this.formasPagamentoService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() formaPagamento: FormasPagamento,
  ): Promise<boolean> {
    return this.formasPagamentoService.update(id, formaPagamento);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.formasPagamentoService.remove(id);
  }
}
