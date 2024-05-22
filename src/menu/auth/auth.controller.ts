import { Controller, Post } from '@nestjs/common';
import { Body, Get } from '@nestjs/common/decorators';
import { AuthService } from './auth.service';
import { Response } from 'src/shared/interfaces/response';
import Payload from 'src/shared/interfaces/payload';
import { Usuario } from '../usuario/entity/usuario.entity';
import { Clientes } from '../clientes/entities/clientes.entity';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('login')
  login(
    @Body() input: { email: string; password: string },
  ): Promise<Response<Payload>> {
    return this.service.login(input);
  }

  @Post('createUser')
  create(@Body() usuario: Usuario): Promise<Usuario> {
    return this.service.createUser(usuario);
  }

  @Get('clientes')
  findAll(): Promise<Clientes[]> {
    return this.service.findAllClientes();
  }

  // @Post('loginWithDevice')
  // loginWithDevice(@Body() input: { deviceId: string; password: string }) {
  //   return this.service.loginWithDevice(input);
  // }
}
