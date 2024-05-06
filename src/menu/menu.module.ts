import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { ApisModule } from './apis/apis.module';
import { LinksModule } from './conexoes-api/conexoes-api.module';

@Module({
  imports: [UsuarioModule, AuthModule, ApisModule, LinksModule],
  controllers: [],
  providers: [],
})
export class MenuModule {}
