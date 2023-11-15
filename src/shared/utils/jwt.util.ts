/* eslint-disable promise/param-names */
import { verify } from 'jsonwebtoken';
import path = require('path');
import * as fs from 'fs';

export const retrieveTokenValue = async <T>(token: string): Promise<T & { iat: number }> => {
  const publicKey = fs.readFileSync(path.join(__dirname, '../../../public.key'));
  return new Promise<T & { iat: number }>((res, rej) => {
    verify(token, publicKey, { algorithms: ['RS256'] }, (err, decoded) => {
      if (err) return rej(err);
      res(decoded as T & { iat: number });
    });
  });
};
