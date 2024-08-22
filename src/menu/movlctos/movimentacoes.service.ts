import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContasReceberService } from '../contas-receber/contas-receber.service';
import { Movimentacoes } from './entity/movimentacoes.entity';

@Injectable()
export class MovimentacoesService {
  constructor(
    @InjectRepository(Movimentacoes)
    private movLctosRepository: Repository<Movimentacoes>,
    private contasReceberService: ContasReceberService,
  ) {}

  async create(movLctos: Movimentacoes): Promise<boolean> {
    const res = await this.movLctosRepository.save(movLctos);
    return res.idMovlctos > 0;
  }

  async findAll(): Promise<Movimentacoes[]> {
    return await this.movLctosRepository.find();
  }

  async findOne(id: number): Promise<Movimentacoes> {
    return await this.movLctosRepository.findOne({
      where: { idMovlctos: id },
    });
  }

  async update(id: number, movLctos: Movimentacoes): Promise<boolean> {
    const res = await this.movLctosRepository.update(id, movLctos);

    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.movLctosRepository.delete(id);
    return res.affected > 0;
  }

  async deletarPorIdContasReceber(id: number) {
    const res = await this.movLctosRepository.delete({ idContasReceber: id });
    return res.affected > 0;
  }

  async salvarPagamento(
    idAtendimento: number,
    obj: Movimentacoes,
  ): Promise<boolean> {
    if (obj.recebimento) {
      await this.contasReceberService.salvarPagamento(idAtendimento, {
        valor: obj.valorPago,
        idFormasDePagamento: obj.idFormasDePagamento,
      });
      const contaReceber =
        await this.contasReceberService.buscarPorIdAtendimento(idAtendimento);

      obj.idContasReceber = contaReceber.idContasReceber;
    }
    const res = this.create(obj);

    return res;
  }
}
