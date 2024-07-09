import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { KitProdutos } from './entity/kit-produtos.entity';

@Injectable()
export class KitProdutosService {
  constructor(
    @InjectRepository(KitProdutos)
    private kitProdutosRepository: Repository<KitProdutos>,
  ) {}

  async create(kitProdutos: KitProdutos): Promise<boolean> {
    const res = await this.kitProdutosRepository.save(kitProdutos);
    return res.idKitProdutos > 0;
  }

  async findAll(): Promise<KitProdutos[]> {
    return await this.kitProdutosRepository.find();
  }

  async findOne(id: number): Promise<KitProdutos> {
    return await this.kitProdutosRepository.findOne({
      where: { idKitProdutos: id },
    });
  }

  async update(id: number, kitProdutos: KitProdutos): Promise<boolean> {
    const res = await this.kitProdutosRepository.update(id, kitProdutos);

    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.kitProdutosRepository.delete(id);

    return res.affected > 0;
  }
}
