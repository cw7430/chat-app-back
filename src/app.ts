import Fastify from 'fastify';
import cors from '@fastify/cors';

const buildApp = async () => {
  const app = Fastify();

  await app.register(cors, { origin: '*' });

  return app;
};

export default buildApp;
