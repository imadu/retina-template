// import initializeDatabase from './database';
import { envInit } from './config/env.config';
// import { seedDatabase } from './database/seed';

async function bootstrapApp() {
  envInit();
  // initializeDatabase();
  // await seedDatabase();

}

export default bootstrapApp;
