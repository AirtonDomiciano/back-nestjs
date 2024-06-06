import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servicos } from './entity/servicos.entity';

@Injectable()
export class ServicosService {
  constructor(
    @InjectRepository(Servicos)
    private servicosRepository: Repository<Servicos>,
  ) {}

  async create(servicos: Servicos): Promise<boolean> {
    const res = await this.servicosRepository.save(servicos);
    return res.idServicos > 0;
  }

  async findAll(): Promise<Servicos[]> {
    return await this.servicosRepository.find();
  }

  async findOne(id: number): Promise<Servicos> {
    return await this.servicosRepository.findOne({
      where: { idServicos: id },
    });
  }

  async update(id: number, servico: Servicos): Promise<boolean> {
    const res = await this.servicosRepository.update(id, servico);

    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.servicosRepository.delete(id);

    return res.affected > 0;
  }
}
