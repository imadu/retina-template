export const isJson = (x: any) => {
  try {
    JSON.parse(x);
    return true;
  } catch (e) {
    return false;
  }
};

export const formatUnknownType = (x: any) => {
  try {
    return isJson(x) ? JSON.parse(x) : x;
  } catch (e) {
    return x;
  }
};

export const toStringUnknownType = (x: any) => {
  try {
    return isJson(x) ? JSON.stringify(x) : x;
  } catch (e) {
    return x;
  }
};

export const stringToObj = (x: any, obj: any = {}) => {
  try {
    return !x ? obj : isJson(x) ? JSON.parse(x) : obj;
  } catch (e) {
    return false;
  }
};

export const dataToBuffer = (data: any) => {
  try {
    const dataToJsonString = JSON.stringify(data);
    const buffer = Buffer.from(dataToJsonString);
    return buffer;
  } catch (e: any) {
    console.log('[ERROR]:::dataToBuffer:::====>', e.message);
    return data as Buffer;
  }
};

export const bufferToData = (buffer: any) => {
  try {
    let decodedData: any = '';
    if (buffer && buffer.type === 'Buffer') {
      const theBufferValue = Buffer.from(buffer.data);
      decodedData = theBufferValue.toString();
    }
    return stringToObj(decodedData, decodedData);
  } catch (e: any) {
    console.log('[ERROR]:::bufferToData:::====>', e.message);
    return false;
  }
};

export const removeItem = (array, item: any) => {
  const index = array.indexOf(item);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};

export const reformatPhrase = ({ text, prefix = '[', suffix = ']' }) => {
  try {
    const textObj = text.split(' ');
    return textObj.map((text) => `${prefix + text + suffix}`).join(' ');
  } catch (e) {
    console.log('reformatPhrase====>', e);
    return text;
  }
};

export const generate = (val: number) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < val; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const capitalizeAll = (string: string) => {
  return string.toUpperCase();
};

export const generateNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// module.exports = {
//   isJson,
//   removeItem,
//   stringToObj,
//   reformatPhrase,
// };
