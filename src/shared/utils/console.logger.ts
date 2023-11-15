import logger from './logger';

const consoleLogger = {
  log(...optionalParams: any[]) {
    console.log(...optionalParams);
    return;
  },

  logInfo(...optionalParams: any[]) {
    logger.info(optionalParams.toString());
    return;
  },

  logError(...optionalParams: any[]) {
    logger.error(optionalParams.toString());
    return;
  },
};

export default consoleLogger;
