import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './entity/usuario.entity';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  create(@Body() usuario: Usuario): Promise<boolean> {
    return this.usuarioService.create(usuario);
  }

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Get('buscarAtivosInativos/:ativo')
  buscarAtivosInativos(@Param('ativo') ativo: boolean): Promise<Usuario[]> {
    return this.usuarioService.buscarAtivosInativos(ativo);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Usuario> {
    return this.usuarioService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() usuario: Usuario): Promise<boolean> {
    return this.usuarioService.update(id, usuario);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<boolean> {
    return this.usuarioService.remove(id);
  }
}
