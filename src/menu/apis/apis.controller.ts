import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApisService } from './apis.service';
import { Apis } from './entities/apis.entity';

@Controller('apis')
export class ApisController {
  constructor(private readonly apisService: ApisService) {}

  @Post()
  create(@Body() apis: Apis): Promise<Apis | string> {
    return this.apisService.create(apis);
  }

  @Get()
  findAll(): Promise<Apis[]> {
    return this.apisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Apis> {
    return this.apisService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() apis: Apis): Promise<Apis | string> {
    return this.apisService.update(id, apis);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<string> {
    return this.apisService.remove(id);
  }
}
