import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { ApisModule } from './apis/apis.module';
import { LinksModule } from './conexoes-api/conexoes-api.module';
import { ClientesModule } from './clientes/clientes.module';
import { AnimaisModule } from './animais/animais.module';
import { ProdutosModule } from './produtos/produtos.module';
import { CidadesModule } from './cidades/cidades.module';
import { UfModule } from './uf/uf.module';
import { AtendimentoModule } from './atendimento/atendimento.module';
import { ServicosModule } from './servicos/servicos.module';

@Module({
  imports: [
    UsuarioModule,
    AuthModule,
    ApisModule,
    LinksModule,
    ClientesModule,
    AnimaisModule,
    ProdutosModule,
    CidadesModule,
    UfModule,
    AtendimentoModule,
    ServicosModule,
  ],
  controllers: [],
  providers: [],
})
export class MenuModule {}
