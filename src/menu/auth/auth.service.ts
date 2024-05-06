import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CryptoService } from 'src/guards/crypto/crypto.service';
import Payload from 'src/shared/interfaces/payload';
import { Response } from 'src/shared/interfaces/response';
import { Usuario } from '../usuario/entity/usuario.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private cryptoService: CryptoService,
  ) {}

  async login(input: {
    email: string;
    password: string;
  }): Promise<Response<Payload>> {
    const { email, password } = input;
    if (!email) {
      throw new Error('');
    }

    if (!password) {
      throw new Error('');
    }

    const user = await this.usuarioRepository.findOne({
      where: { email: email },
    });

    if (password !== user.senha) {
    }

    // const cryptoPass = this.cryptoService.cryptAES(password);

    // const passEquals = await this.cryptoService.verifyHash(
    //   cryptoPass,
    //   user.senha,
    // );

    return {
      success: true,
      message: '',
      data: {
        token: this.cryptoService.generateJWT(user.senha),
        name: user.nome,
        email: email,
        idUser: user.id,
      },
    };
  }

  async createUser(usuario: Usuario): Promise<Usuario> {
    return await this.usuarioRepository.save(usuario);
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
