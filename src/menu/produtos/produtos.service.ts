import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produtos } from './entities/produtos.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produtos)
    private productRepository: Repository<Produtos>,
  ) {}

  async create(produto: Produtos): Promise<boolean> {
    const res = await this.productRepository.save(produto);

    if (res.idProdutos) {
      return true;
    } else {
      return false;
    }
  }

  async findAll(): Promise<Produtos[]> {
    return await this.productRepository.find();
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
}
