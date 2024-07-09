import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HorarioServico } from './entity/horario-servico.entity';

@Injectable()
export class HorarioServicoService {
  constructor(
    @InjectRepository(HorarioServico)
    private horarioServico: Repository<HorarioServico>,
  ) {}

  async create(horarioServico: HorarioServico): Promise<boolean> {
    const res = await this.horarioServico.save(horarioServico);
    return res.idHorario > 0;
  }

  async findAll(): Promise<HorarioServico[]> {
    return await this.horarioServico.find();
  }

  async findOne(id: number): Promise<HorarioServico> {
    return await this.horarioServico.findOne({
      where: { idServicos: id },
    });
  }

  async update(id: number, horarioServico: HorarioServico): Promise<boolean> {
    const res = await this.horarioServico.update(id, horarioServico);

    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.horarioServico.delete(id);

    return res.affected > 0;
  }
}
