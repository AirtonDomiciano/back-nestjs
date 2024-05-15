import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const proc = process.env.CRYPT || 'aulas_xpert';
    let token = request.headers.authorization;

    const routesException = ['/auth/login', '/auth/createUser'];
    if (!routesException.includes(request.route.path)) {
      if (token?.length) {
        token = token.replace('Bearer ', '');
      }

      jwt.verify(token, proc, function (err, decoded) {
        if (err) {
          console.log(err, decoded);
          throw new Error('Não autorizado. Efetue login para continuar!');
        }
      });
    }

    return true;
  }
}
