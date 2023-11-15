import pino from 'pino';
import pinoHttp from 'pino-http';
import { app } from '../../../config/env.config';

const loggerOptions = {
  mixin() {
    return {
      service: app.name,
    };
  },
  serializers: {
    req(req) {
      return {
        method: req.method,
        headers: req.headers,
        ip: req.headers['x-forwarded-for'] || req.raw?.socket?.remoteAddress,
        url: req.url,
        path: req.path,
        params: req.params,
        query: req.query,
        body: req.raw.body,
      };
    },
    res(res) {
      return {
        statusCode: res.raw.statusCode,
        headers: res.headers,
        body: res.body,
      };
    },
    err(err) {
      return {
        id: err.id,
        type: err.type,
        code: err.code,
        message: err.message,
        stack: err.stack,
      };
    },
  },
  redact: [
    'req.body.pin',
    'req.body.passcode',
    'req.body.password',
    'req.body.bvn',
    'req.headers.authorization',
  ],
};

const loggerMiddleware = pinoHttp(loggerOptions);

const logger = pino(loggerOptions);

export { loggerMiddleware, logger };

export default pino();
