import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuModule } from './menu/menu.module';
import { typeOrmConfig } from './conf/ormconfig';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth-guard/auth-guard';
import { HttpExceptionFilter } from './guards/exception/exception';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), MenuModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
