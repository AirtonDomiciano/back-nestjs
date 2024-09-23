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
import { HorarioServicoModule } from './horario-servico/horario-servico.module';
import { ProdutosDoServicosModule } from './produtos-do-servico/produtos-do-servico.module';
import { TipoServicoModule } from './tipo-servico/tipo-servico.module';
import { ProdutosServicoModule } from './produtos-servico/produtos-servico.module';
import { ContasReceberModule } from './contas-receber/contas-receber.module';
import { ParcelasModule } from './parcelas/parcelas.module';
import { MovimentacoesModule } from './movlctos/movimentacoes.module';

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
    HorarioServicoModule,
    ProdutosServicoModule,
    TipoServicoModule,
    ProdutosDoServicosModule,
    ContasReceberModule,
    ParcelasModule,
    MovimentacoesModule,
  ],
  controllers: [],
  providers: [],
})
export class MenuModule {}
