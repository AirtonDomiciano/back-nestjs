import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entidades } from './entities/entidade.entity';

@Injectable()
export class EntidadesService {
  constructor(
    @InjectRepository(Entidades)
    private entidadeRepository: Repository<Entidades>,
  ) {}

  async create(entidade: Entidades): Promise<Entidades> {
    return await this.entidadeRepository.save(entidade);
  }

  async findAll(): Promise<Entidades[]> {
    return await this.entidadeRepository.find();
  }

  async findOne(id: number): Promise<Entidades> {
    return await this.entidadeRepository.findOne({ where: { idEntidades: id } });
  }

  async update(id: number, entidade: Entidades): Promise<Entidades> {
    const updatedEntity = await this.entidadeRepository.save(entidade);
    return updatedEntity;
  }

  async remove(id: number): Promise<void> {
    await this.entidadeRepository.delete(id);
  }
}
