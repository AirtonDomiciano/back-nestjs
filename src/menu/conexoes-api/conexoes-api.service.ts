import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConexoesApi } from './entities/conexoes-api.entity';

@Injectable()
export class ConexoesApiService {
  constructor(
    @InjectRepository(ConexoesApi)
    private conexoesApiRepository: Repository<ConexoesApi>,
  ) {}

  async create(conexoesApi: ConexoesApi): Promise<ConexoesApi | string> {
    let verificacao = true;
    let mensagem = '';

    if (
      conexoesApi.rapidApiKey.length === 0 ||
      conexoesApi.rapidApiKey === null
    ) {
      verificacao = false;
      mensagem += 'O campo RapidaApi-Key é obrigatório!';
    }

    if (verificacao) {
      const updatedApis = await this.conexoesApiRepository.save(conexoesApi);
      return updatedApis;
    } else {
      return mensagem;
    }
  }

  async findAll(): Promise<ConexoesApi[]> {
    return await this.conexoesApiRepository.find();
  }

  async findOne(id: number): Promise<ConexoesApi> {
    return await this.conexoesApiRepository.findOne({ where: { idApis: id } });
  }

  async update(
    id: number,
    conexoesApi: ConexoesApi,
  ): Promise<ConexoesApi | string> {
    let verificacao = true;
    let mensagem = '';

    if (
      conexoesApi.rapidApiKey.length === 0 ||
      conexoesApi.rapidApiKey === null
    ) {
      verificacao = false;
      mensagem += 'O campo RapidaApi-Key é obrigatório!';
    }

    if (verificacao) {
      const updatedApis = await this.conexoesApiRepository.save(conexoesApi);
      return updatedApis;
    } else {
      return mensagem;
    }
  }

  async remove(id: number): Promise<string> {
    await this.conexoesApiRepository.delete(id);
    const mensagem = 'Usuário deletado!';
    return mensagem;
  }
}
