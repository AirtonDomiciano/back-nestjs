import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Usuario } from '../usuario/entity/usuario.entity';
import { CryptoModule } from 'src/guards/crypto/crypto.module';
import { Clientes } from '../clientes/entities/clientes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Clientes]), CryptoModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
