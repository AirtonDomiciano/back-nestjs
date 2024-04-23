import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { EntidadesModule } from './entidades/entidades.module';
import { CidadesModule } from './cidades/cidades.module';

@Module({
  imports: [UsuarioModule, EntidadesModule, CidadesModule],
  controllers: [],
  providers: [],
})
export class MenuModule {}
