import { loggerMiddleware } from '../../shared/utils/logger';

const initLogging = () => {
  return (req, res, next) => {
    loggerMiddleware(req, res);
    next();
  };
};

export default initLogging;
