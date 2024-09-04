import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { Produtos } from './entities/produtos.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produtos)
    private productRepository: Repository<Produtos>,
  ) {}

  async create(produto: Produtos): Promise<boolean> {
    const res = await this.productRepository.save(produto);
    return res.idProdutos > 0;
  }

  async findAll(): Promise<Produtos[]> {
    return await this.productRepository.find();
  }

  async buscarAtivosInativos(ativo: boolean): Promise<Array<Produtos>> {
    return await this.productRepository.find({
      where: { ativo: ativo },
    });
  }

  async findOne(id: number): Promise<Produtos> {
    const res = await this.productRepository.findOne({
      where: { idProdutos: id },
    });
    return res;
  }

  async update(id: number, produto: Produtos): Promise<boolean> {
    const res = await this.productRepository.update(id, produto);

    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.productRepository.delete(id);
    return res.affected > 0;
  }

  async buscarTodosComEstoque(): Promise<Array<Produtos>> {
    const res = await this.productRepository.find({
      where: { qtdeTotal: MoreThan(0) },
    });
    return res;
  }
}
