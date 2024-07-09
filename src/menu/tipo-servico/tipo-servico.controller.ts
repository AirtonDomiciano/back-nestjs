import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TipoServicoService } from './tipo-servico.services';
import { TipoServico } from './entity/tipo-servico.entity';

@Controller('tipo-servico')
export class TipoServicoController {
  constructor(private readonly tipoServicoService: TipoServicoService) {}

  @Post()
  create(@Body() tipoServico: TipoServico): Promise<boolean> {
    return this.tipoServicoService.create(tipoServico);
  }

  @Get()
  findAll(): Promise<TipoServico[]> {
    return this.tipoServicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<TipoServico> {
    return this.tipoServicoService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() tipoServico: TipoServico,
  ): Promise<boolean> {
    return this.tipoServicoService.update(id, tipoServico);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.tipoServicoService.remove(id);
  }
}
