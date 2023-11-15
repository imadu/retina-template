import initCompression from './compression.middleware';
import initBodyParser from './body-parser.middleware';
import initLogging from './logging.middleware';

const initializeMiddlewares = (app) => {
  app.use(initCompression());

  app.use(initBodyParser());

  app.use(initLogging());
};

export default initializeMiddlewares;
