import dotenv from 'dotenv';

interface DbConfig {
  HOST: string;
  PORT: number;
  USER: string;
  PASSWORD: string;
  NAME: string;
  CHARSET: string;
  TIMEZONE: string;
}

// 1) 공통 .env 로드
dotenv.config();

// 2) 환경별 로컬 파일 명시적으로 로드 (.env.local 있음)
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'local'}` });

const dbConfig: DbConfig = {
  HOST: process.env.DB_HOST ?? '127.0.0.1',
  PORT: Number(process.env.DB_PORT ?? 3306),
  USER: process.env.DB_USER ?? 'root',
  PASSWORD: process.env.DB_PASSWORD ?? '',
  NAME: process.env.DB_NAME ?? 'chat_app',
  CHARSET: process.env.DB_CHARSET ?? 'utf8mb4',
  TIMEZONE: process.env.DB_TIMEZONE ?? 'Z',
};

export default dbConfig;
