import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();
const config = {
  dbHost: configService.get<string>('MYSQL_HOST') ?? 'db',
  dbName: configService.get<string>('MYSQL_DATABASE') ?? 'fastfood',
  dbPassword: configService.get<string>('MYSQL_PASSWORD') ?? 'root',
  dbPort: 3306,
  // dbPort: configService.get<string>('MYSQL_PORT'),
  dbType: 'mysql',
  dbUser: configService.get<string>('MYSQL_USER') ?? 'root',
};

export const url = `mysql://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}?connect_timeout=300`;

process.env.DATABASE_URL = url;

console.log(process.env.DATABASE_URL);
