import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cidades } from './entity/cidades.entity';

@Injectable()
export class CidadesService {
  constructor(
    @InjectRepository(Cidades)
    private cidadesRepository: Repository<Cidades>,
  ) {}

  async create(cidades: Cidades): Promise<boolean> {
    const res = await this.cidadesRepository.save(cidades);
    return res.idCidades > 0;
  }

  async findAll(): Promise<Cidades[]> {
    return await this.cidadesRepository.find({
      order: {
        nomeCidade: 'ASC',
      },
    });
  }

  async findOne(id: number): Promise<Cidades> {
    return await this.cidadesRepository.findOne({
      where: { idCidades: id },
    });
  }

  async update(id: number, cidades: Cidades): Promise<boolean> {
    const res = await this.cidadesRepository.update(id, cidades);

    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.cidadesRepository.delete(id);

    return res.affected > 0;
  }
}
