import { DataSource } from 'typeorm';
import config from './config';
import { Host } from './src/entities/Host';
import { Event } from './src/entities/Event';

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.DATABASE_HOST,
  port: config.DATABASE_PORT,
  username: config.DATABASE_USERNAME,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE_NAME,
  migrations: ["src/database/migrations/*.ts"],
  entities: [Host, Event]
})