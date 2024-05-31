import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cidades } from './entity/cidades.entity';

@Injectable()
export class CidadesService {
  constructor(
    @InjectRepository(Cidades)
    private clientesRepository: Repository<Cidades>,
  ) {}

  async create(cidades: Cidades): Promise<boolean> {
    const res = await this.clientesRepository.save(cidades);
    return res.idClientes > 0;
  }

  async findAll(): Promise<Cidades[]> {
    return await this.clientesRepository.find({
      order: {
        nomeCidade: 'ASC',
      },
    });
  }

  async findOne(id: number): Promise<Cidades> {
    return await this.clientesRepository.findOne({
      where: { idClientes: id },
    });
  }

  async update(id: number, cidades: Cidades): Promise<boolean> {
    const res = await this.clientesRepository.update(id, cidades);

    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.clientesRepository.delete(id);

    return res.affected > 0;
  }
}
