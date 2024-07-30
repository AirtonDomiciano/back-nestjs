import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ParcelasService } from './parcelas.service';
import { Parcelas } from './entity/parcelas.entity';

@Controller('parcelas')
export class ParcelasController {
  constructor(private readonly parcelasService: ParcelasService) {}

  @Post()
  create(@Body() parcelas: Parcelas): Promise<boolean> {
    return this.parcelasService.create(parcelas);
  }

  @Get()
  findAll(): Promise<Parcelas[]> {
    return this.parcelasService.findAll();
  }

  @Get('buscarPorIdContasReceber/:id')
  buscarPorIdContasReceber(@Param('id') id: number): Promise<Parcelas> {
    return this.parcelasService.buscarPorIdContasReceber(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Parcelas> {
    return this.parcelasService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() parcelas: Parcelas,
  ): Promise<boolean> {
    return this.parcelasService.update(id, parcelas);
  }

  @Delete('deletarPorIdContasReceber/:id')
  deletarPorIdContasReceber(@Param('id') id: number): Promise<boolean> {
    return this.parcelasService.deletarPorIdContasReceber(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.parcelasService.remove(id);
  }
}
