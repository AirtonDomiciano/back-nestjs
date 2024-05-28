import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clientes } from './entities/clientes.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Clientes)
    private clientesRepository: Repository<Clientes>,
  ) {}

  async create(clientes: Clientes): Promise<boolean> {
    const res = await this.clientesRepository.save(clientes);

    if (res.idClientes) {
      return true;
    } else {
      return false;
    }
  }

  async findAll(): Promise<Clientes[]> {
    return await this.clientesRepository.find();
  }

  async findOne(id: number): Promise<Clientes> {
    return await this.clientesRepository.findOne({
      where: { idClientes: id },
    });
  }

  async update(id: number, cliente: Clientes): Promise<boolean> {
    const res = await this.clientesRepository.update(id, cliente);

    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.clientesRepository.delete(id);

    return res.affected > 0;
  }
}
