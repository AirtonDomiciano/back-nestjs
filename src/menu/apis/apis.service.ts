import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Apis } from './entities/apis.entity';
import { ParamsSave } from './dto/apis-params.dto';

@Injectable()
export class ApisService {
  constructor(
    @InjectRepository(Apis)
    private apisRepository: Repository<Apis>,
  ) {}

  async create(
    apis: Apis,
  ): Promise<ParamsSave> {
    let msg = '';

    if (!apis.nome) {
      msg += 'O campo Nome é obrigatório!';
    }

    if (!apis.url) {
      msg += 'O campo URL é obrigatório!';
    }

    if (!apis.rapidApiHost) {
      msg += 'O campo RapidApi-Host é obrigatório!';
    }

    const success = msg.length === 0;

    if (!success) {
      return { success, msg };
    }

    const input = await this.apisRepository.save(apis);
    return { input, success };
  }

  async findAll(): Promise<Apis[]> {
    return await this.apisRepository.find();
  }

  async findOne(id: number): Promise<Apis> {
    return await this.apisRepository.findOne({ where: { idApis: id } });
  }

  async update(id: number, api: Apis): Promise<Apis | string> {
    let verificacao = true;
    let mensagem = '';

    if (!api.nome) {
      verificacao = false;
      mensagem += 'O campo Nome é obrigatório!';
    }

    if (!api.url) {
      verificacao = false;
      mensagem += 'O campo URL é obrigatório!';
    }

    if (!api.rapidApiHost) {
      verificacao = false;
      mensagem += 'O campo RapidApi-Host é obrigatório!';
    }

    if (verificacao) {
      const updatedApis = await this.apisRepository.save(api);
      return updatedApis;
    } else {
      return mensagem;
    }
  }

  async remove(id: number): Promise<string> {
    await this.apisRepository.delete(id);
    const mensagem = 'Api deletado!';
    return mensagem;
  }
}
