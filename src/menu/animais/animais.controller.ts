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

@Controller('animais')
export class AnimaisController {
  constructor(private readonly animaisService: AnimaisService) {}

  @Post() create(@Body() animais: Animais): Promise<Animais> {
    return this.animaisService.create(animais);
  }

  @Get()
  findAll(): Promise<Animais[]> {
    return this.animaisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Animais> {
    return this.animaisService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() animais: Animais): Promise<Animais> {
    return this.animaisService.update(id, animais);
  }

  @Delete(':id') remove(@Param('id') id: number): Promise<void> {
    return this.animaisService.remove(id);
  }
}
