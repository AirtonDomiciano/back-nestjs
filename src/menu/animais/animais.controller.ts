import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AnimaisService } from './animais.service';
import { Animais } from './entities/animais.entity';
import { AnimaisDto } from './dto/animais.dto';

@Controller('animais')
export class AnimaisController {
  constructor(private readonly animaisService: AnimaisService) {}

  @Post()
  create(@Body() animais: Animais): Promise<boolean> {
    return this.animaisService.create(animais);
  }

  @Get()
  findAll(): Promise<Animais[]> {
    return this.animaisService.findAll();
  }

  @Get('animaisclientes/:ativo')
  animaisCliente(@Param('ativo') ativo: boolean): Promise<Array<AnimaisDto>> {
    return this.animaisService.animaisClientes(ativo);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Animais> {
    return this.animaisService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() animais: Animais): Promise<boolean> {
    return this.animaisService.update(id, animais);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<boolean> {
    return await this.animaisService.remove(id);
  }
}
