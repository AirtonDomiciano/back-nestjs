import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UfService } from './uf.service';
import { Uf } from './entity/uf.entity';

@Controller('ufs')
export class UfController {
  constructor(private readonly ufService: UfService) {}

  @Post()
  create(@Body() uf: Uf): Promise<boolean> {
    return this.ufService.create(uf);
  }

  @Get()
  findAll(): Promise<Uf[]> {
    return this.ufService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Uf> {
    return this.ufService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() uf: Uf): Promise<boolean> {
    return this.ufService.update(id, uf);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.ufService.remove(id);
  }
}
