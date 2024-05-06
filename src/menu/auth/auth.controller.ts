import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { AuthService } from './auth.service';
import { Response } from 'src/shared/interfaces/response';
import Payload from 'src/shared/interfaces/payload';
import { Usuario } from '../usuario/entity/usuario.entity';

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

  // @Post('loginWithDevice')
  // loginWithDevice(@Body() input: { deviceId: string; password: string }) {
  //   return this.service.loginWithDevice(input);
  // }
}
