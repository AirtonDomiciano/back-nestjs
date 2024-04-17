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

  async create(usuario: Usuario): Promise<Usuario> {
    return await this.usuarioRepository.save(usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.usuarioRepository.findOne({ where: { id: id } });
  }

  async update(id: number, usuario: Usuario): Promise<Usuario> {
    const updatedUsuario = await this.usuarioRepository.save(usuario);
    return updatedUsuario;
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
