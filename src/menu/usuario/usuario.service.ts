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

  async create(usuario: Usuario): Promise<Usuario | string> {
    let verificacao = true;
    let mensagem = '';

    if (usuario.nome.length === 0 || usuario.nome === null) {
      verificacao = false;
      mensagem += 'O campo Nome é obrigatório!';
    }

    if (usuario.email.length === 0 || usuario.email === null) {
      verificacao = false;
      mensagem += 'O campo E-mail é obrigatório!';
    }

    if (verificacao) {
      return await this.usuarioRepository.save(usuario);
    } else {
      return mensagem;
    }
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.usuarioRepository.findOne({ where: { idUsuarios: id } });
  }

  async update(id: number, usuario: Usuario): Promise<Usuario | string> {
    let verificacao = true;
    let mensagem = '';

    if (usuario.nome.length === 0 || usuario.nome === null) {
      verificacao = false;
      mensagem += 'O campo Nome é obrigatório!';
    }

    if (usuario.email.length === 0 || usuario.email === null) {
      verificacao = false;
      mensagem += 'O campo E-mail é obrigatório!';
    }

    if (verificacao) {
      const updatedUsuario = await this.usuarioRepository.save(usuario);
      return updatedUsuario;
    } else {
      return mensagem;
    }
  }

  async remove(id: number): Promise<string> {
    await this.usuarioRepository.delete(id);
    const mensagem = 'Usuário deletado!';
    return mensagem;
  }
}
