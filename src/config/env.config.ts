import 'dotenv/config';
export type NODE_ENV = 'development' | 'test' | 'staging' | 'production';

export const getEnv = {
  env: process.env.NODE_ENV as NODE_ENV,
};

export const app = {
  name: process.env.APP_NAME,
  brand: process.env.BRAND_NAME,
  url: process.env.APP_URL,
  devUrl: process.env.APP_URL,
  isProduction: process.env.NODE_ENV === 'production',
  bank_code: process.env.BANK_CODE,
};

export const server = {
  port: Number(process.env.PORT) || 8080,
  address: process.env.SERVER_ADDRESS || '0.0.0.0',
  bodyParserSize: process.env.BODY_PARSER_SIZE || '5MB',
};

export const envInit = () => {
  /**
   * Environment variables required for all environments (dev, testing, staging, production)
   */
  const requiredVariables = [
    // 'PORT',
    // 'JWT_SECRET',
    // 'JWT_MOBILE_EXPIRES_IN',
    // 'JWT_WEB_EXPIRES_IN',
    // 'DB_HOST',
    // 'DB_DATABASE',
    // 'DB_USERNAME',
    // 'DB_PASSWORD',
    // 'DB_PORT',
    // 'REDIS_HOST',
    // 'REDIS_PASSWORD',
    // 'REDIS_PORT',
    // 'GATEMAN_SECRET',
  ];

  /**
   * Environment variables required for both staging and production
   */
  const productionAndStagingVariables = [];

  /**
   * Requires MongoDB and Redis credentials in production and staging, else uses Redis and MongoDB connection string directly
   * in dev or any other environment
   */
  if (['production', 'staging'].includes(getEnv.env))
    requiredVariables.push(...productionAndStagingVariables);

  const missingVariables = requiredVariables.reduce((acc: string[], variable: string) => {
    const isVariableMissing = !process.env[variable.toUpperCase()];

    return isVariableMissing ? [...acc, variable.toUpperCase()] : acc;
  }, []);

  if (missingVariables.length)
    throw new Error(`The following required variables are missing: ${missingVariables}}`);

  return true;
};
