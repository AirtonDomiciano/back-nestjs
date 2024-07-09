import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servicos } from './entity/servicos.entity';
import { ServicosDto } from './dto/servicos.dto';

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

  async buscaPorIdAtendimento(id: number): Promise<Servicos> {
    return await this.servicosRepository.findOne({
      where: { idAtendimento: id },
    });
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

  async listandoServicosClientesAnimais(): Promise<Array<ServicosDto>> {
    const qb = this.servicosRepository.createQueryBuilder('S');
    qb.select([
      'S.ID_SERVICOS as idServicos',
      'S.ID_ATENDIMENTO as idAtendimento',
      'C.NOMECLIENTES as nomeClientes',
      'A.NOME as nome',
      'TS.NOMESERVICO as nomeServico',
      'S.STATUS as status',
      'AT.VALOR as valor',
      'S.TEMPO as tempo',
    ]);
    qb.innerJoin('CLIENTES', 'C', 'C.ID_CLIENTES = S.ID_CLIENTES');
    qb.innerJoin('ANIMAIS', 'A', 'A.ID_ANIMAL = S.ID_ANIMAL');
    qb.innerJoin('TIPOSERVICO', 'TS', 'TS.ID_TIPOSERVICO = S.ID_TIPOSERVICO');
    qb.innerJoin('ATENDIMENTO', 'AT', 'AT.ID_ATENDIMENTO = S.ID_ATENDIMENTO');

    return qb.getRawMany();
  }
}
