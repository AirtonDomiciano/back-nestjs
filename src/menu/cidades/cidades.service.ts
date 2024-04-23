import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cidades } from './entities/cidades.entity';

@Injectable()
export class CidadesService {
  constructor(
    @InjectRepository(Cidades)
    private cidadesRepository: Repository<Cidades>,
  ) {}

  async create(entidade: Cidades): Promise<Cidades> {
    return await this.cidadesRepository.save(entidade);
  }

  async findAll(): Promise<Cidades[]> {
    return await this.cidadesRepository.find();
  }

  async findOne(id: number): Promise<Cidades> {
    return await this.cidadesRepository.findOne({ where: { idCidades: id } });
  }

  async update(id: number, cidade: Cidades): Promise<Cidades> {
    const updatedEntity = await this.cidadesRepository.save(cidade);
    return updatedEntity;
  }

  async remove(id: number): Promise<void> {
    await this.cidadesRepository.delete(id);
  }
}
