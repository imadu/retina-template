import httpStatus from 'http-status';
import { ErrorResponse } from '../../shared/utils/response.util';
import logger from '../../shared/utils/logger';

const handleWelcome = (req, res) => {
  res.send({
    service: 'Piggytech FAAS API',
    version: '1.0.0',
  });
};

const handleRouteNotFound = (req, res) => {
  res
    .status(httpStatus.NOT_FOUND)
    .json(ErrorResponse("Oops! We can't find the URL you are looking for"));
};

const handleError = (err, req, res, next) => {
  const statusCode = err.statusCode || httpStatus.SERVICE_UNAVAILABLE;
  const message =
    err instanceof Error ? err.message : 'We are unable to process your request. Please try again';

  logger.error({ err: err.cause || err });

  res.status(statusCode).json(ErrorResponse(message, err.errorCode, err.errors));
};

export { handleWelcome, handleRouteNotFound, handleError };
