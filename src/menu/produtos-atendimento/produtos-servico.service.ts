import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdutosServico } from './entity/produtos-servico.entity';

@Injectable()
export class ProdutosServicoService {
  constructor(
    @InjectRepository(ProdutosServico)
    private produtosServicoService: Repository<ProdutosServico>,
  ) {}

  async create(produtosServico: ProdutosServico): Promise<boolean> {
    const res = await this.produtosServicoService.save(produtosServico);
    return res.idProdutosServico > 0;
  }

  async findAll(): Promise<ProdutosServico[]> {
    return await this.produtosServicoService.find();
  }

  async findOne(idProdutosServico: number): Promise<ProdutosServico> {
    const res = await this.produtosServicoService.findOne({
      where: { idProdutosServico: idProdutosServico },
    });
    return res;
  }

  async buscarProdutosPorServicoAnimal(
    idServicosAnimal: number,
  ): Promise<Array<ProdutosServico>> {
    const res = await this.produtosServicoService.find({
      where: { idTipoServico: idServicosAnimal },
    });
    return res;
  }

  async update(
    idProdutosServico: number,
    produtosServico: ProdutosServico,
  ): Promise<boolean> {
    const res = await this.produtosServicoService.update(
      idProdutosServico,
      produtosServico,
    );

    return res.affected > 0;
  }

  async remove(idProdutosServico: number): Promise<boolean> {
    const res = await this.produtosServicoService.delete(idProdutosServico);

    return res.affected > 0;
  }

  async deletarPorIdTipoServico(id: number): Promise<boolean> {
    const res = await this.produtosServicoService.delete({ idTipoServico: id });

    return res.affected > 0;
  }

  async salvarLista(produtosServico: ProdutosServico[]): Promise<boolean> {
    try {
      await Promise.all(
        produtosServico.map((produto) =>
          this.produtosServicoService.save(produto),
        ),
      );
      return true;
    } catch (error) {
      console.error('Erro ao salvar produtosServico:' + error);
      return false;
    }
  }
}
