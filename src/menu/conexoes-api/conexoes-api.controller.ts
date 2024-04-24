import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ConexoesApiService } from './conexoes-api.service';
import { ConexoesApi } from './entities/conexoes-api.entity';

@Controller('conexoesapi')
export class ConexoesApiController {
  constructor(private readonly conexoesApiService: ConexoesApiService) {}

  @Post()
  create(@Body() conexoesApi: ConexoesApi): Promise<ConexoesApi | string> {
    return this.conexoesApiService.create(conexoesApi);
  }

  @Get()
  findAll(): Promise<ConexoesApi[]> {
    return this.conexoesApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ConexoesApi> {
    return this.conexoesApiService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() conexoesApi: ConexoesApi,
  ): Promise<ConexoesApi | string> {
    return this.conexoesApiService.update(id, conexoesApi);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<string> {
    return this.conexoesApiService.remove(id);
  }
}
