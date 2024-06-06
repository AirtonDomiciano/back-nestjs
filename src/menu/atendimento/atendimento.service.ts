import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atendimento } from './entity/atendimento.entity';

@Injectable()
export class AtendimentoService {
  constructor(
    @InjectRepository(Atendimento)
    private atendimentoRepository: Repository<Atendimento>,
  ) {}

  async create(atendimento: Atendimento): Promise<boolean> {
    const res = await this.atendimentoRepository.save(atendimento);
    return res.idAtendimento > 0;
  }

  async findAll(): Promise<Atendimento[]> {
    return await this.atendimentoRepository.find();
  }

  async findOne(id: number): Promise<Atendimento> {
    return await this.atendimentoRepository.findOne({
      where: { idAtendimento: id },
    });
  }

  async update(id: number, atendimento: Atendimento): Promise<boolean> {
    const res = await this.atendimentoRepository.update(id, atendimento);

    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.atendimentoRepository.delete(id);

    return res.affected > 0;
  }
}
