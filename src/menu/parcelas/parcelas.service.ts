import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Parcelas } from './entity/parcelas.entity';
@Injectable()
export class ParcelasService {
  constructor(
    @InjectRepository(Parcelas)
    private parcelasRepository: Repository<Parcelas>,
  ) {}

  async create(parcelas: Parcelas): Promise<boolean> {
    const res = await this.parcelasRepository.save(parcelas);
    return res.idParcelas > 0;
  }

  async findAll(): Promise<Parcelas[]> {
    return await this.parcelasRepository.find();
  }

  async buscarPorIdContasReceber(id: number): Promise<Parcelas> {
    return await this.parcelasRepository.findOne({
      where: { idContasReceber: id },
    });
  }

  async findOne(id: number): Promise<Parcelas> {
    return await this.parcelasRepository.findOne({
      where: { idParcelas: id },
    });
  }

  async update(id: number, parcelas: Parcelas): Promise<boolean> {
    const res = await this.parcelasRepository.update(id, parcelas);

    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.parcelasRepository.delete(id);

    return res.affected > 0;
  }

  async deletarPorIdContasReceber(id: number): Promise<boolean> {
    const res = await this.parcelasRepository.delete({ idContasReceber: id });

    return res.affected > 0;
  }
}
