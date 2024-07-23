import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContasReceber } from './entity/contas-receber.entity';
import { ContasReceberDto } from './dto/contas-receber.dto';

@Injectable()
export class ContasReceberService {
  constructor(
    @InjectRepository(ContasReceber)
    private contasReceberRepository: Repository<ContasReceber>,
  ) {}

  async create(contasReceber: ContasReceber): Promise<boolean> {
    const res = await this.contasReceberRepository.save(contasReceber);
    return res.idContasReceber > 0;
  }

  async findAll(): Promise<ContasReceber[]> {
    return await this.contasReceberRepository.find();
  }

  async findOne(id: number): Promise<ContasReceber> {
    return await this.contasReceberRepository.findOne({
      where: { idContasReceber: id },
    });
  }

  async update(id: number, contasReceber: ContasReceber): Promise<boolean> {
    const res = await this.contasReceberRepository.update(id, contasReceber);

    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.contasReceberRepository.delete(id);

    return res.affected > 0;
  }

  async deletarPorIdAtendimento(id: number): Promise<boolean> {
    const res = await this.contasReceberRepository.delete({
      idAtendimento: id,
    });

    return res.affected > 0;
  }

  async buscarPorIdAtendimento(id: number) {
    const res = await this.contasReceberRepository.findOne({
      where: { idAtendimento: id },
    });

    return res;
  }
}
