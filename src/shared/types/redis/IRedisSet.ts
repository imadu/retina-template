type RedisSet = {
  parent: string;
  tag: string;
  value: string | number;
  options?: object;
  expire?: number;
};

export default RedisSet;
