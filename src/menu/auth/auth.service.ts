import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CryptoService } from 'src/guards/crypto/crypto.service';
import Payload from 'src/shared/interfaces/payload';
import { Response } from 'src/shared/interfaces/response';
import { Usuario } from '../usuario/entity/usuario.entity';
import { Clientes } from '../clientes/entities/clientes.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private cryptoService: CryptoService,
    @InjectRepository(Clientes)
    private clientesRepository: Repository<Clientes>,
  ) {}

  async login(input: {
    email: string;
    password: string;
  }): Promise<Response<Payload>> {
    const obj: Response<Payload> = new Response<Payload>();
    const { email, password } = input;

    if (!email) {
      throw new Error('Erro de email');
    }

    if (!password) {
      throw new Error('Erro de Senha');
    }

    const user = await this.usuarioRepository.findOne({
      where: { email: email },
    });

    if (password !== user?.senha) {
      obj.success = false;
      obj.message = 'Usuário não tem acesso.';
    } else {
      obj.success = true;
      obj.message = 'Deu boa';

      obj.data = {
        token: this.cryptoService.generateJWT(user.senha),
        name: user.nome,
        email: email,
        idUser: user.idUsuarios,
      };
    }

    // const cryptoPass = this.cryptoService.cryptAES(password);

    // const passEquals = await this.cryptoService.verifyHash(
    //   cryptoPass,
    //   user.senha,
    // );

    // const cryptoPass = this.cryptoService.cryptAES(password);

    // const passEquals = await this.cryptoService.verifyHash(
    //   cryptoPass,
    //   user.senha,
    // );
    return obj;
  }

  async createUser(
    usuario: Usuario,
  ): Promise<{ user: Usuario; success: boolean }> {
    const res = await this.usuarioRepository.save(usuario);

    return { user: res, success: true };
  }

  async findAllClientes(): Promise<Clientes[]> {
    return await this.clientesRepository.find();
  }

  // async loginWithDevice(input: { deviceId: string; password: string }): Promise<
  //   Response<{
  //     token: string;
  //     name: string;
  //     idUser: number;
  //   }>
  // > {
  // TODO
  // const { deviceId, password } = input;
  // if (!deviceId) {
  //   throw new Error(DEVICE_ID_REQUIRED);
  // }
  // if (!password) {
  //   throw new Error(PASSWORD_REQUIRED);
  // }
  // const hash = this.cryptoService.cryptAES(deviceId);
  // const user = await this.userRepository.findOne({
  //   where: { deviceId: hash },
  //   select: ['name', 'idUser', 'password'],
  // });
  // if (!user) {
  //   throw new Error(DEVICE_ID_OR_PASS_INVALID);
  // }
  // const cryptoPass = this.cryptoService.cryptAES(password);
  // const passEquals = await this.cryptoService.verifyHash(
  //   cryptoPass,
  //   user.password,
  // );
  // if (!passEquals) {
  //   throw new Error(DEVICE_ID_OR_PASS_INVALID);
  // }
  // return {
  //   success: true,
  //   message: LOGGED_WITH_SUCCESS,
  //   data: {
  //     token: this.cryptoService.generateJWT(user.password),
  //     name: user.name,
  //     idUser: user.idUser,
  //   },
  // };
  // }
}
