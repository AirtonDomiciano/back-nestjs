import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animais } from './entities/animais.entity';
import { AnimaisDto } from './dto/animais.dto';

@Injectable()
export class AnimaisService {
  constructor(
    @InjectRepository(Animais)
    private animaisRepository: Repository<Animais>,
  ) {}

  async create(animais: Animais): Promise<boolean> {
    const res = await this.animaisRepository.save(animais);
    return res.idAnimal > 0;
  }

  async findAll(): Promise<Animais[]> {
    return await this.animaisRepository.find();
  }

  async animaisClientes(ativo: boolean): Promise<Array<AnimaisDto>> {
    const qb = this.animaisRepository
      .createQueryBuilder('A')
      .leftJoin('CLIENTES', 'C', 'C.ID_CLIENTES = A.ID_CLIENTES')
      .select([
        'A.ID_ANIMAL AS idAnimal',
        'A.NOME AS nome',
        'C.NOMECLIENTES AS nomeClientes',
        'A.DIVISAO AS divisao',
        'A.ESPECIE AS especie',
        'A.RACA AS raca',
      ]);

    qb.where('A.ATIVO = :ativo', { ativo: ativo.toString() == 'true' ? 1 : 0 });

    return qb.getRawMany();
  }

  async findOne(id: number): Promise<Animais> {
    return await this.animaisRepository.findOne({
      where: { idAnimal: id },
    });
  }

  async update(idAnimal: number, animais: Animais): Promise<boolean> {
    const res = await this.animaisRepository.update(
      { idAnimal },
      { ...animais },
    );
    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.animaisRepository.delete(id);
    return res.affected > 0;
  }

  async animaisClientes(): Promise<Array<AnimaisDto>> {
    const qb = this.animaisRepository
      .createQueryBuilder('A')
      .leftJoin('CLIENTES', 'C', 'C.ID_CLIENTES = A.ID_CLIENTES')
      .select([
        'A.ID_ANIMAL AS idAnimal',
        'A.NOME AS nome',
        'C.NOMECLIENTES AS nomeClientes',
        'A.DIVISAO AS divisao',
        'A.ESPECIE AS especie',
        'A.RACA AS raca',
        'A.ATIVO AS ativo',
      ]);
    return qb.getRawMany();
  }
}
