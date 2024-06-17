import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdutosAtendimento } from './entity/produtos-atendimento.entity';

@Injectable()
export class ProdutosAtendimentoService {
  constructor(
    @InjectRepository(ProdutosAtendimento)
    private produtosAtendimentoService: Repository<ProdutosAtendimento>,
  ) {}

  async create(produtosAtendimento: ProdutosAtendimento): Promise<boolean> {
    const res = await this.produtosAtendimentoService.save(produtosAtendimento);
    return res.idProdutosAtendimento > 0;
  }

  async findAll(): Promise<ProdutosAtendimento[]> {
    return await this.produtosAtendimentoService.find();
  }

  async findOne(idProdutosAtendimento: number): Promise<ProdutosAtendimento> {
    const res = await this.produtosAtendimentoService.findOne({
      where: { idProdutosAtendimento: idProdutosAtendimento },
    });
    return res;
  }

  async update(
    idProdutosAtendimento: number,
    produtosAtendimento: ProdutosAtendimento,
  ): Promise<boolean> {
    const res = await this.produtosAtendimentoService.update(
      idProdutosAtendimento,
      produtosAtendimento,
    );

    return res.affected > 0;
  }

  async remove(idProdutosAtendimento: number): Promise<boolean> {
    const res = await this.produtosAtendimentoService.delete(
      idProdutosAtendimento,
    );

    return res.affected > 0;
  }
}
