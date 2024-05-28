import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Apis } from './entities/apis.entity';

@Injectable()
export class ApisService {
  constructor(
    @InjectRepository(Apis)
    private apisRepository: Repository<Apis>,
  ) {}

  async create(apis: Apis): Promise<boolean> {
    const res = await this.apisRepository.save(apis);
    if (res.idApis) {
      return true;
    }
    return false;
  }

  async findAll(): Promise<Apis[]> {
    return await this.apisRepository.find();
  }

  async findOne(id: number): Promise<Apis> {
    return await this.apisRepository.findOne({ where: { idApis: id } });
  }

  async update(id: number, api: Apis): Promise<boolean> {
    const res = await this.apisRepository.update(id, api);
    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.apisRepository.delete(id);
    return res.affected > 0;
  }
}
