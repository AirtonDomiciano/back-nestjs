import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entity/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(usuario: Usuario): Promise<boolean> {
    const res = await this.usuarioRepository.save(usuario);
    if (res.idUsuarios) {
      return true;
    }
    return false;
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.usuarioRepository.findOne({ where: { idUsuarios: id } });
  }

  async update(id: number, usuario: Usuario): Promise<boolean> {
    const res = await this.usuarioRepository.update(id, usuario);
    return res.affected > 0;
  }

  async remove(id: number): Promise<boolean> {
    const res = await this.usuarioRepository.delete(id);
    return res.affected > 0;
  }
}
