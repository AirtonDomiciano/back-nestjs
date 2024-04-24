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

  async create(apis: Apis): Promise<Apis | string> {
    let verificacao = true;
    let mensagem = '';

    if (apis.nome.length === 0 || apis.nome === null) {
      verificacao = false;
      mensagem += 'O campo Nome é obrigatório!';
    }

    if (apis.url.length === 0 || apis.url === null) {
      verificacao = false;
      mensagem += 'O campo URL é obrigatório!';
    }

    if (apis.rapidApiHost.length === 0 || apis.rapidApiHost === null) {
      verificacao = false;
      mensagem += 'O campo RapidApi-Host é obrigatório!';
    }

    if (verificacao) {
      const updatedApis = await this.apisRepository.save(apis);
      return updatedApis;
    } else {
      return mensagem;
    }
  }

  async findAll(): Promise<Apis[]> {
    return await this.apisRepository.find();
  }

  async findOne(id: number): Promise<Apis> {
    return await this.apisRepository.findOne({ where: { idApis: id } });
  }

  async update(id: number, apis: Apis): Promise<Apis | string> {
    let verificacao = true;
    let mensagem = '';

    if (apis.nome.length === 0 || apis.nome === null) {
      verificacao = false;
      mensagem += 'O campo Nome é obrigatório!';
    }

    if (apis.url.length === 0 || apis.url === null) {
      verificacao = false;
      mensagem += 'O campo URL é obrigatório!';
    }

    if (apis.rapidApiHost.length === 0 || apis.rapidApiHost === null) {
      verificacao = false;
      mensagem += 'O campo RapidApi-Host é obrigatório!';
    }

    if (verificacao) {
      const updatedApis = await this.apisRepository.save(apis);
      return updatedApis;
    } else {
      return mensagem;
    }
  }

  async remove(id: number): Promise<string> {
    await this.apisRepository.delete(id);
    const mensagem = 'Usuário deletado!';
    return mensagem;
  }
}
