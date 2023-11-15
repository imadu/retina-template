import 'reflect-metadata';
import 'module-alias/register';
import http from 'http';
import restana from 'restana';
import { Server } from '@shared/types/restana/restana.type';
import { container } from 'tsyringe';
import { errorHandler, routeNotFound } from './shared/utils/response.util';
import bootstrapApp from './bootstrap';
import { RoutesV1, RouteVersions } from './shared/enum/route.config.enum';
import initializeMiddlewares from './shared/middlewares';
import logger from './shared/utils/logger';
import { handleWelcome } from './modules/app/app.route';

class App {
  public appServer: Server;

  constructor() {
    this.loadConfiguration();
    this.handleApplicationExceptions();
    initializeMiddlewares(this.appServer);
    this.registerModules();
    bootstrapApp();
  }

  private loadConfiguration() {
    this.appServer = restana({ defaultRoute: routeNotFound, errorHandler })
  }

  private handleApplicationExceptions() {
    process.on('uncaughtException', (err) => {
      console.error('Uncaught Exception:', err);
      logger.error({ error: err }, 'Uncaught Exception');
    });
    process.on('unhandledRejection', (reason) => {
      console.error('Unhandled Promise Rejection:', reason);
      logger.error({ reason }, 'Unhandled Promise Rejection');
    });
  }

  private registerModules() {
    // Proxy all existing Production Routes
    // this is added to make middlewares compatible with async functions
    this.appServer.use(async (req, res, next) => {
      try {
        await next();
      } catch (err) {
        return next(err);
      }
    });

    this.appServer.get('/', handleWelcome);
    // healthRoute(this.appServer, `${RouteVersions.v1}/${RoutesV1.HEALTH}`);
  }

  public getInstance() {
    return this.appServer;
  }

  public async close() {
    await this.appServer.close();
    // container.resolve(RedisClient).close();
  }

  public async listen(port: number, address) {
    try {
      logger.info(`Application started at PORT ${port}`);
      return this.appServer.start(port, address);
    } catch (error) {
      console.error('Application error:', error);
      logger.error({ error }, 'Application error');
    }
  }
}

export default App;
