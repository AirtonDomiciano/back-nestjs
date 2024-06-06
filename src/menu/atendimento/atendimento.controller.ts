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

@Controller('atendimento')
export class AtendimentoController {
  constructor(private readonly atendimentoService: AtendimentoService) {}

  @Post()
  create(@Body() atendimento: Atendimento): Promise<boolean> {
    return this.atendimentoService.create(atendimento);
  }

  @Get()
  findAll(): Promise<Atendimento[]> {
    return this.atendimentoService.findAll();
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
