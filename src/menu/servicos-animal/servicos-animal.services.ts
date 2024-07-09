import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicosAnimal } from './entity/servicos-animal.entity';

@Injectable()
export class ServicosAnimalService {
  constructor(
    @InjectRepository(ServicosAnimal)
    private servicosAnimalRepository: Repository<ServicosAnimal>,
  ) {}

  async create(servicosAnimal: ServicosAnimal): Promise<boolean> {
    const res = await this.servicosAnimalRepository.save(servicosAnimal);
    return res.idServicosAnimal > 0;
  }

  async findAll(): Promise<ServicosAnimal[]> {
    return await this.servicosAnimalRepository.find({
      order: {
        nomeServico: 'ASC',
      },
    });
  }

  async findOne(idServicosAnimal: number): Promise<ServicosAnimal> {
    const res = await this.servicosAnimalRepository.findOne({
      where: { idServicosAnimal: idServicosAnimal },
    });
    return res;
  }

  async update(
    idServicosAnimal: number,
    servicosAnimal: ServicosAnimal,
  ): Promise<boolean> {
    const res = await this.servicosAnimalRepository.update(
      idServicosAnimal,
      servicosAnimal,
    );

    return res.affected > 0;
  }

  async remove(idServicosAnimal: number): Promise<boolean> {
    const res = await this.servicosAnimalRepository.delete(idServicosAnimal);

    return res.affected > 0;
  }
}
