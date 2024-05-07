import { Injectable } from '@nestjs/common/decorators';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class CryptoService {
  generateTwoFA(qntdDigitos = 4): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < qntdDigitos) {
      if (counter === 0) {
        result = characters.charAt(
          Math.floor(Math.random() * charactersLength),
        );
      } else {
        result += `-${characters.charAt(
          Math.floor(Math.random() * charactersLength),
        )}`;
      }
      counter += 1;
    }

    return result;
  }

  generateJWT(pass: string, expiresIn = 24 * 60 * 60): string {
    return jwt.sign({ id: pass }, process.env.CRYPT || 'aulas_xpert', {
      expiresIn: expiresIn,
    });
  }
}
