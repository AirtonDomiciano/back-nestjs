import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ContasReceberService } from './contas-receber.service';
import { ContasReceber } from './entity/contas-receber.entity';
import { FormasPagamento } from '../formas-de-pagamento/entity/formas-de-pagamento.entity';
import { SalvarPagamentoDto } from './dto/salvar-pagamento.dto';

@Controller('contas-receber')
export class ContasReceberController {
  constructor(private readonly contasReceberService: ContasReceberService) {}

  @Post()
  create(@Body() contasReceber: ContasReceber): Promise<boolean> {
    return this.contasReceberService.create(contasReceber);
  }

  @Post('salvarPagamento/:id')
  salvarPagamento(
    @Param('id') id: number,
    @Body() obj: SalvarPagamentoDto,
  ): Promise<boolean> {
    return this.contasReceberService.salvarPagamento(id, obj);
  }

  @Get()
  findAll(): Promise<ContasReceber[]> {
    return this.contasReceberService.findAll();
  }

  @Get('buscarPorIdAtendimento/:id')
  buscarPorIdAtendimento(@Param('id') id: number): Promise<ContasReceber> {
    return this.contasReceberService.buscarPorIdAtendimento(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ContasReceber> {
    return this.contasReceberService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() contasReceber: ContasReceber,
  ): Promise<boolean> {
    return this.contasReceberService.update(id, contasReceber);
  }

  @Delete('deletarPorIdAtendimento/:id')
  deletarPorIdAtendimento(@Param('id') id: number): Promise<boolean> {
    return this.contasReceberService.deletarPorIdAtendimento(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.contasReceberService.remove(id);
  }
}
