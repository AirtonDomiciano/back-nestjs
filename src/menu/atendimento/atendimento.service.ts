import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository, createQueryBuilder } from 'typeorm';
import { Atendimento } from './entity/atendimento.entity';
import { ServicosService } from '../servicos/servicos.service';
import { HorarioServico } from '../horario-servico/entity/horario-servico.entity';
import { HorarioServicoService } from '../horario-servico/horario-servico.service';
import TempoDto from './dto/tempo.dto';
import { ContasReceberService } from '../contas-receber/contas-receber.service';
import { ParcelasService } from '../parcelas/parcelas.service';
import { MovimentacoesService } from '../movlctos/movimentacoes.service';
import { GraficoAtendimentosDto } from './dto/grafico-atendimentos.dto';

@Injectable()
export class AtendimentoService {
  constructor(
    @InjectRepository(Atendimento)
    private atendimentoRepository: Repository<Atendimento>,
    private servicosService: ServicosService,
    private horarioServicoService: HorarioServicoService,
    private contasReceberService: ContasReceberService,
    private parcelasService: ParcelasService,
    private movLctosService: MovimentacoesService,
  ) {}

  async create(atendimento: Atendimento): Promise<boolean> {
    const res = await this.atendimentoRepository.save(atendimento);
    return res.idAtendimento > 0;
  }

  async findAll(): Promise<Atendimento[]> {
    return await this.atendimentoRepository.find();
  }

  async findOne(id: number): Promise<Atendimento> {
    return await this.atendimentoRepository.findOne({
      where: { idAtendimento: id },
    });
  }

  async update(id: number, atendimento: Atendimento): Promise<boolean> {
    const res = await this.atendimentoRepository.update(id, atendimento);

    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.atendimentoRepository.delete(id);

    return res.affected > 0;
  }

  async iniciar(id: number): Promise<boolean> {
    const servico = await this.servicosService.buscarPorIdAtendimento(id);
    servico.status = 2;

    const horario: HorarioServico = {
      idServicos: servico.idServicos!,
      horarioInicio: new Date(),
    };

    const res = await Promise.all([
      await this.servicosService.create(servico),
      await this.horarioServicoService.create(horario),
    ]);

    if (res) return true;
  }

  async finalizar(id: number): Promise<boolean> {
    const servico = await this.servicosService.buscarPorIdAtendimento(id);
    const horario = await this.horarioServicoService.buscarPorIdServico(
      servico.idServicos!,
    );

    horario.horarioTermino = new Date();
    horario.horarioInicio = new Date(horario.horarioInicio!);

    const tempoServicoMilisegundos =
      horario.horarioTermino.getTime() - horario.horarioInicio!.getTime();

    const tempoServico = this.conversaoMilisegundos(tempoServicoMilisegundos);

    servico.tempo = tempoServico;
    servico.status = 3;

    const res = await Promise.all([
      await this.horarioServicoService.create(horario),
      await this.servicosService.create(servico),
    ]);

    if (res) return true;
  }

  async cancelar(id: number): Promise<boolean> {
    const servico = await this.servicosService.buscarPorIdAtendimento(id);
    servico.status = 0;

    const res = await Promise.all([
      await this.servicosService.create(servico),
      await this.contasReceberService.deletarPorIdAtendimento(id),
    ]);

    if (res) return true;
  }

  async restaurar(id: number): Promise<boolean> {
    const servico = await this.servicosService.buscarPorIdAtendimento(id);
    const atendimento = await this.findOne(id);
    const horario = await this.horarioServicoService.buscarPorIdServico(
      servico.idServicos,
    );
    const contaReceber =
      await this.contasReceberService.buscarPorIdAtendimento(id);

    if (contaReceber && horario) {
      await this.parcelasService.deletarPorIdContasReceber(
        contaReceber.idContasReceber!,
      );
      await this.movLctosService.deletarPorIdContasReceber(
        contaReceber.idContasReceber,
      );
      await this.contasReceberService.deletarPorIdAtendimento(id);
      await this.horarioServicoService.remove(horario.idHorario!);
    }

    const salvar = {
      idAtendimento: id,
      idClientes: servico.idClientes,
      valor: atendimento.valor!,
      valorPago: 0,
      pago: false,
    };

    servico.status = 1;

    const res = await Promise.all([
      await this.servicosService.create(servico),
      await this.contasReceberService.create(salvar),
    ]);

    if (res) return true;
  }

  conversaoMilisegundos(tempo: number): any {
    let tempoServico: TempoDto = { horas: 0, minutos: 0, segundos: 0 };
    while (tempo >= 3600000) {
      tempo -= 3600000;
      tempoServico.horas += 1;
    }

    while (tempo >= 60000) {
      tempo -= 60000;
      tempoServico.minutos += 1;
    }

    while (tempo >= 1000) {
      tempo -= 1000;
      tempoServico.segundos += 1;
    }
    const tempoFormatado: any = `${tempoServico.horas}:${tempoServico.minutos}:${tempoServico.segundos}`;

    return tempoFormatado;
  }

  async buscarAtendimentosPorData(
    dataInicio: string,
    dataTermino: string,
  ): Promise<Array<GraficoAtendimentosDto>> {
    const qb = this.atendimentoRepository.createQueryBuilder('A');
    qb.select([
      'A.DATA as data',
      'A.VALOR as valor',
      'CR.VALORPAGO as valorPago',
      'TS.VALOR as valorTipoServico',
    ]);
    qb.innerJoin('SERVICOS', 'S', 'S.ID_ATENDIMENTO = A.ID_ATENDIMENTO');
    qb.innerJoin('TIPOSERVICO', 'TS', 'TS.ID_TIPOSERVICO = S.ID_TIPOSERVICO');
    qb.innerJoin('CONTASRECEBER', 'CR', 'CR.ID_ATENDIMENTO = A.ID_ATENDIMENTO');
    qb.where('A.DATA BETWEEN :dataInicio AND :dataTermino', {
      dataInicio,
      dataTermino,
    });

    return qb.getRawMany();
  }
}
