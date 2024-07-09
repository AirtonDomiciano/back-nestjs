import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormasPagamento } from './entity/formas-de-pagamento.entity';

@Injectable()
export class FormasPagamentoService {
  constructor(
    @InjectRepository(FormasPagamento)
    private formaPagamentoRepository: Repository<FormasPagamento>,
  ) {}

  async create(formaPagamento: FormasPagamento): Promise<boolean> {
    const res = await this.formaPagamentoRepository.save(formaPagamento);
    return res.idFormasDePagamento > 0;
  }

  async findAll(): Promise<FormasPagamento[]> {
    return await this.formaPagamentoRepository.find();
  }

  async findOne(id: number): Promise<FormasPagamento> {
    return await this.formaPagamentoRepository.findOne({
      where: { idFormasDePagamento: id },
    });
  }

  async update(id: number, formaPagamento: FormasPagamento): Promise<boolean> {
    const res = await this.formaPagamentoRepository.update(id, formaPagamento);

    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.formaPagamentoRepository.delete(id);

    return res.affected > 0;
  }
}
