import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ServicosAnimal } from './entity/servicos-animal.entity';
import { ServicosAnimalService } from './servicos-animal.services';

@Controller('servicos-animal')
export class ServicosAnimaloController {
  constructor(private readonly servicosAnimalService: ServicosAnimalService) {}

  @Post()
  create(@Body() servicosAnimal: ServicosAnimal): Promise<boolean> {
    return this.servicosAnimalService.create(servicosAnimal);
  }

  @Get()
  findAll(): Promise<ServicosAnimal[]> {
    return this.servicosAnimalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ServicosAnimal> {
    return this.servicosAnimalService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() servicosAnimal: ServicosAnimal,
  ): Promise<boolean> {
    return this.servicosAnimalService.update(id, servicosAnimal);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.servicosAnimalService.remove(id);
  }
}
