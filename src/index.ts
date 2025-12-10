import buildApp from './app';
import { appConfig } from './common/configs';

const PORT = appConfig.PORT;

const main = async () => {
  const app = await buildApp();

  try {
    await app.listen({
      port: PORT,
      host: '0.0.0.0',
    });

    console.log(`🚀 Server running at http://localhost:${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

main();
