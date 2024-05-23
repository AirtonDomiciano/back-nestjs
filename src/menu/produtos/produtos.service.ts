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

  async create(produto: Produtos): Promise<Produtos> {
    return await this.productRepository.save(produto);
  }

  async findAll(): Promise<Produtos[]> {
    return await this.productRepository.find();
  }

  async findOne(id: number): Promise<{ produto: Produtos; success: boolean }> {
    const res = await this.productRepository.findOne({
      where: { idProdutos: id },
    });
    return { produto: res, success: true };
  }

  async update(id: number, produto: Produtos): Promise<void> {
    await this.productRepository.update(id, produto);
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.productRepository.delete(id);
    return res.affected > 0;
  }
}
