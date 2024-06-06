import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Uf } from './entity/uf.entity';

@Injectable()
export class UfService {
  constructor(
    @InjectRepository(Uf)
    private ufRepository: Repository<Uf>,
  ) {}

  async create(uf: Uf): Promise<boolean> {
    const res = await this.ufRepository.save(uf);
    if (res.idUf) {
      return true;
    }
    return false;
  }

  async findAll(): Promise<Uf[]> {
    return await this.ufRepository.find();
  }

  async findOne(id: number): Promise<Uf> {
    return await this.ufRepository.findOne({ where: { idUf: id } });
  }

  async update(id: number, uf: Uf): Promise<boolean> {
    const res = await this.ufRepository.update(id, uf);
    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.ufRepository.delete(id);
    return res.affected > 0;
  }
}
