import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animais } from './entities/animais.entity';

@Injectable()
export class AnimaisService {
  constructor(
    @InjectRepository(Animais)
    private animaisRepository: Repository<Animais>,
  ) {}

  async create(animais: Animais): Promise<Animais> {
    return await this.animaisRepository.save(animais);
  }

  async findAll(): Promise<Animais[]> {
    return await this.animaisRepository.find();
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
}
