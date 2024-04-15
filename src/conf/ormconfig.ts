/* eslint-disable @typescript-eslint/no-var-requires */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host: process.env.HOST || 'localhost',
  port: 5432,
  username: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DB,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  logging: true,
};
