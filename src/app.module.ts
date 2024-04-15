import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuModule } from './menu/menu.module';
import { typeOrmConfig } from './conf/ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
