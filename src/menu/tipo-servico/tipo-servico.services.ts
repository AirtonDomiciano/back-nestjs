import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoServico } from './entity/tipo-servico.entity';

@Injectable()
export class TipoServicoService {
  constructor(
    @InjectRepository(TipoServico)
    private TipoServicoRepository: Repository<TipoServico>,
  ) {}

  async create(TipoServico: TipoServico): Promise<boolean> {
    const res = await this.TipoServicoRepository.save(TipoServico);
    return res.idTipoServico > 0;
  }

  async findAll(): Promise<TipoServico[]> {
    return await this.TipoServicoRepository.find({
      order: {
        nomeServico: 'ASC',
      },
    });
  }

  async findOne(idTipoServico: number): Promise<TipoServico> {
    const res = await this.TipoServicoRepository.findOne({
      where: { idTipoServico: idTipoServico },
    });
    return res;
  }

  async update(
    idTipoServico: number,
    TipoServico: TipoServico,
  ): Promise<boolean> {
    const res = await this.TipoServicoRepository.update(
      idTipoServico,
      TipoServico,
    );

    return res.affected > 0;
  }

  async remove(idTipoServico: number): Promise<boolean> {
    const res = await this.TipoServicoRepository.delete(idTipoServico);

    return res.affected > 0;
  }
}
