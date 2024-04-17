/* eslint-disable @typescript-eslint/no-var-requires */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host: process.env.SERVER_DB || 'localhost',
  port: +process.env.PORT_DB || 5432,
  username: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_DB,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  // synchronize: true,
  migrationsRun: true,
  logging: true,
  extra: {
    trustServerCertificate: true,
  },
};
