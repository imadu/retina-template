import { ObjectLiteral } from '@shared/types/object-literal.type';
import { format } from 'date-fns';

// Consists of sender's bank code[6] + Date & time (yymmddHHmmss) [12] + Unique serial [12]
export function generateSessionId(): string {
  const date = new Date();
  const formattedDate = format(date, 'yymmddHHmmss');
  const code = String(Math.floor(Math.random() * 900000) + 100000);
  return code + formattedDate + generateRandomString(12);

  function generateRandomString(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(getRandomInt(characters.length));
    }
    return result;
  }

  function getRandomInt(max) {
    const getRandomValues = require('get-random-values');
    const array = new Uint8Array(10);
    return getRandomValues(array)[0] % max;
  }
}

export function omit<T>(obj: ObjectLiteral, keys: string[]): T {
  const shallowCopy = { ...obj };
  for (const key of keys) {
    delete shallowCopy[key];
  }
  return shallowCopy as T;
}
