import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdutosServico } from './entity/produtos-servico.entity';

@Injectable()
export class ProdutosServicoService {
  constructor(
    @InjectRepository(ProdutosServico)
    private produtosServicoRepository: Repository<ProdutosServico>,
  ) {}

  async create(produtosServico: ProdutosServico): Promise<boolean> {
    const res = await this.produtosServicoRepository.save(produtosServico);
    return res.idProdutosServico > 0;
  }

  async findAll(): Promise<ProdutosServico[]> {
    return await this.produtosServicoRepository.find();
  }

  async findOne(idProdutosServico: number): Promise<ProdutosServico> {
    const res = await this.produtosServicoRepository.findOne({
      where: { idProdutosServico: idProdutosServico },
    });
    return res;
  }

  async buscarProdutosPorTipoServico(
    idServicosAnimal: number,
  ): Promise<Array<ProdutosServico>> {
    const qb = await this.produtosServicoRepository.createQueryBuilder('PS');
    qb.innerJoinAndSelect('PRODUTOS', 'P', 'PS.ID_PRODUTOS = P.ID_PRODUTOS');
    qb.where('PS.ID_TIPOSERVICO = :idServicosAnimal', { idServicosAnimal });
    qb.andWhere('P.QTDETOTAL > 0');

    return qb.getMany();
  }

  async update(
    idProdutosServico: number,
    produtosServico: ProdutosServico,
  ): Promise<boolean> {
    const res = await this.produtosServicoRepository.update(
      idProdutosServico,
      produtosServico,
    );

    return res.affected > 0;
  }

  async remove(idProdutosServico: number): Promise<boolean> {
    const res = await this.produtosServicoRepository.delete(idProdutosServico);

    return res.affected > 0;
  }

  async deletarPorIdTipoServico(id: number): Promise<boolean> {
    const res = await this.produtosServicoService.delete({ idTipoServico: id });

    return res.affected > 0;
  }
}
