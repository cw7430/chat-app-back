import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

import { envConfig } from '@/common/configs';

const pool = mysql.createPool({
  host: envConfig.DB.HOST,
  port: envConfig.DB.PORT,
  user: envConfig.DB.USER,
  password: envConfig.DB.PASSWORD,
  database: envConfig.DB.NAME,
  charset: envConfig.DB.CHARSET,
  waitForConnections: true,
  timezone: envConfig.DB.TIMEZONE,
  dateStrings: false,
});

export const db = drizzle(pool);
