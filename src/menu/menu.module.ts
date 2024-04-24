import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ApisModule } from './apis/apis.module';
import { LinksModule } from './links/links.module';

@Module({
  imports: [UsuarioModule, ApisModule, LinksModule],
  controllers: [],
  providers: [],
})
export class MenuModule {}
