import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdutosDoServico } from './entity/produtos-do-servico.entity';
@Injectable()
export class ProdutosDoServicoService {
  constructor(
    @InjectRepository(ProdutosDoServico)
    private produtosDoServicoRepository: Repository<ProdutosDoServico>,
  ) {}

  async create(produtos: ProdutosDoServico): Promise<boolean> {
    const res = await this.produtosDoServicoRepository.save(produtos);
    return res.idServicos > 0;
  }

  async findAll(): Promise<ProdutosDoServico[]> {
    return await this.produtosDoServicoRepository.find();
  }

  async findOne(id: number): Promise<ProdutosDoServico> {
    return await this.produtosDoServicoRepository.findOne({
      where: { idServicos: id },
    });
  }

  async update(id: number, servico: ProdutosDoServico): Promise<boolean> {
    const res = await this.produtosDoServicoRepository.update(id, servico);

    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.produtosDoServicoRepository.delete(id);

    return res.affected > 0;
  }

  async buscarPorIdServico(id: number): Promise<Array<ProdutosDoServico>> {
    const res = await this.produtosDoServicoRepository.find({
      where: { idServicos: id },
    });
    return res;
  }

  async deletarPeloIdServico(id: number): Promise<boolean> {
    const res = await this.produtosDoServicoRepository.delete({
      idServicos: id,
    });
    return res.affected > 0;
  }
}
