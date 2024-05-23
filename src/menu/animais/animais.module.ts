import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animais } from './entities/animais.entity';
import { AnimaisController } from './animais.controller';
import { AnimaisService } from './animais.service';

@Module({
  imports: [TypeOrmModule.forFeature([Animais])],
  controllers: [AnimaisController],
  providers: [AnimaisService],
})
export class AnimaisModule {}
