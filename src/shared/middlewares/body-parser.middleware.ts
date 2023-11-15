import bodyParser from 'body-parser';
import { server } from '../../config/env.config';

const initBodyParser = () => {
  const jsonParser = bodyParser.json({ limit: server.bodyParserSize });

  return (req, res, next) => {
    return new Promise((resolve) => {
      jsonParser(req, res, (err) => {
        return resolve(next(err));
      });
    });
  };
};

export default initBodyParser;
