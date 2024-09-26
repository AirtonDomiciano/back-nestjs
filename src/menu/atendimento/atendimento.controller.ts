import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AtendimentoService } from './atendimento.service';
import { Atendimento } from './entity/atendimento.entity';
import { GraficoAtendimentosDto } from './dto/grafico-atendimentos.dto';

@Controller('atendimento')
export class AtendimentoController {
  constructor(private readonly atendimentoService: AtendimentoService) {}

  @Post()
  create(@Body() atendimento: Atendimento): Promise<boolean> {
    return this.atendimentoService.create(atendimento);
  }

  @Post('iniciar/:id')
  iniciar(@Param('id') id: number): Promise<boolean> {
    return this.atendimentoService.iniciar(id);
  }

  @Post('finalizar/:id')
  finalizar(@Param('id') id: number): Promise<boolean> {
    return this.atendimentoService.finalizar(id);
  }

  @Post('cancelar/:id')
  cancelar(@Param('id') id: number): Promise<boolean> {
    return this.atendimentoService.cancelar(id);
  }

  @Post('restaurar/:id')
  restaurar(@Param('id') id: number): Promise<boolean> {
    return this.atendimentoService.restaurar(id);
  }

  @Get()
  findAll(): Promise<Atendimento[]> {
    return this.atendimentoService.findAll();
  }

  @Get('buscarAtendimentosPorData/:dataInicio/:dataTermino')
  buscarAtendimentosPorData(
    @Param('dataInicio') dataInicio: string,
    @Param('dataTermino') dataTermino: string,
  ): Promise<Array<GraficoAtendimentosDto>> {
    return this.atendimentoService.buscarAtendimentosPorData(
      dataInicio,
      dataTermino,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Atendimento> {
    return this.atendimentoService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() atendimento: Atendimento,
  ): Promise<boolean> {
    return this.atendimentoService.update(id, atendimento);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.atendimentoService.remove(id);
  }
}
