import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { HorarioServicoService } from './horario-servico.service';
import { HorarioServico } from './entity/horario-servico.entity';

@Controller('horario-servico')
export class HorarioServicoController {
  constructor(private readonly horarioServicoService: HorarioServicoService) {}

  @Post()
  create(@Body() horarioServico: HorarioServico): Promise<boolean> {
    return this.horarioServicoService.create(horarioServico);
  }

  @Get()
  findAll(): Promise<HorarioServico[]> {
    return this.horarioServicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<HorarioServico> {
    return this.horarioServicoService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() horarioServico: HorarioServico,
  ): Promise<boolean> {
    return this.horarioServicoService.update(id, horarioServico);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.horarioServicoService.remove(id);
  }
}
