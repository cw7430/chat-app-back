import dotenv from 'dotenv';

interface AppConfig {
  NODE_ENV: 'local' | 'dev' | 'prod';
  PORT: number;
}

// 1) 공통 .env 로드
dotenv.config();

const appConfig: AppConfig = {
  NODE_ENV: (process.env.NODE_ENV as 'local' | 'dev' | 'prod') ?? 'local',
  PORT: Number(process.env.PORT ?? 4000),
};

export default appConfig;
