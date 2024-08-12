import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContasReceber } from './entity/contas-receber.entity';
import { Parcelas } from '../parcelas/entity/parcelas.entity';
import { ServicosService } from '../servicos/servicos.service';
import { ParcelasService } from '../parcelas/parcelas.service';
import { SalvarPagamentoDto } from './dto/salvar-pagamento.dto';

@Injectable()
export class ContasReceberService {
  constructor(
    @InjectRepository(ContasReceber)
    private contasReceberRepository: Repository<ContasReceber>,
    private servicosService: ServicosService,
    private parcelasService: ParcelasService,
  ) {}

  async create(contasReceber: ContasReceber): Promise<boolean> {
    const res = await this.contasReceberRepository.save(contasReceber);
    return res.idContasReceber > 0;
  }

  async findAll(): Promise<ContasReceber[]> {
    return await this.contasReceberRepository.find();
  }

  async findOne(id: number): Promise<ContasReceber> {
    return await this.contasReceberRepository.findOne({
      where: { idContasReceber: id },
    });
  }

  async update(id: number, contasReceber: ContasReceber): Promise<boolean> {
    const res = await this.contasReceberRepository.update(id, contasReceber);

    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.contasReceberRepository.delete(id);

    return res.affected > 0;
  }

  async deletarPorIdAtendimento(id: number): Promise<boolean> {
    const res = await this.contasReceberRepository.delete({
      idAtendimento: id,
    });

    return res.affected > 0;
  }

  async buscarPorIdAtendimento(id: number) {
    const res = await this.contasReceberRepository.findOne({
      where: { idAtendimento: id },
    });

    return res;
  }

  async salvarPagamento(
    idAtendimento: number,
    obj: SalvarPagamentoDto,
  ): Promise<boolean> {
    const servico =
      await this.servicosService.buscarPorIdAtendimento(idAtendimento);
    const contaReceber = await this.contasReceberRepository.findOne({
      where: { idAtendimento: idAtendimento },
    });
    const parcela: Parcelas = {
      idContasReceber: contaReceber.idContasReceber!,
      idFormasDePagamento: obj.idFormasDePagamento,
      valorParcela: obj.valor,
      dataPgto: new Date(),
    };
    const valorPago = contaReceber.valorPago! + obj.valor;
    const valorArredondado = parseFloat(valorPago.toFixed(2));
    contaReceber.valorPago! = valorArredondado;

    if (contaReceber.valor === valorArredondado) {
      contaReceber.pago = true;
      contaReceber.dataPgto = new Date();
      servico.status = 4;
    }
    const idServico = servico.idServicos;
    delete servico.idServicos;

    const res = await Promise.all([
      this.servicosService.update(idServico, servico),
      this.create(contaReceber),
      this.parcelasService.create(parcela),
    ]);

    if (res) return true;
  }
}
