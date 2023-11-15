import httpStatus from 'http-status';
import logger from '../../shared/utils/logger';
import { Response, Request } from '../../shared/types/restana/restana.type';
import { ObjectLiteral } from '../../shared/types/object-literal.type';
import { StatusCodes } from 'http-status-codes';
import AppError from '../../shared/error/app.error';

interface RDM {
  status?: boolean;
  response: Response;
  message?: string;
  data?: any;
  checks?: string[];
  errorCode?: any;
  errors?: any[];
  statusCode?: number;
  errorStatusCode?: number;
}

export const SuccessResponse = (message: string, data?: ObjectLiteral, meta?: ObjectLiteral) => {
  return {
    status: true,
    message,
    data,
    meta,
  };
};
export const ErrorResponse = (message: string, errors?: any[], errorCode?: string) => {
  return {
    status: false,
    message,
    errorCode,
    errors,
  };
};

export const errorResponse = ({
  response,
  message,
  data,
  errors,
  checks,
  errorCode,
  statusCode,
}: RDM) => {
  response.send(
    {
      status: false,
      message,
      checks,
      data,
      errors,
    },
    statusCode || errorCode || httpStatus.BAD_REQUEST,
  );

  response.statusCode = Number(errorCode);
};

export const successfulResponse = ({
  response,
  data,
  message,
  checks,
  statusCode = StatusCodes.OK,
}: RDM) => {
  logger.info('successful response ===> %o', { message, data });

  response.send(
    {
      status: true,
      message,
      data,
      checks,
    },
    statusCode,
  );
};

export const showGenericResponse = ({
  response,
  status,
  data,
  message,
  checks,
  errorCode,
  errorStatusCode = 400,
  statusCode,
}: RDM) => {
  const newData = { ...data };
  delete newData.status;
  delete newData.message;

  if (data?.status !== true && status !== true) {
    return errorResponse({
      response,
      message: message || data?.message,
      data: newData,
      statusCode: data?.errorStatusCode ?? errorStatusCode,
      checks,
      errorCode,
    });
  }

  return successfulResponse({
    response,
    data: newData,
    message: message || data?.message,
    checks,
    statusCode,
  });
};

export const successfulResp = ({ response, data, message, checks }: RDM) => {
  logger.info('successful response ===> %o', data);

  response.send(
    {
      status: true,
      message,
      data,
      checks,
    },
    httpStatus.OK,
  );
};

export const showGenericResp = ({
  response,
  status,
  data,
  message,
  checks,
  errorCode,
  errorStatusCode = 400,
  statusCode,
}: RDM) => {
  const newData = data?.data;

  if (data?.status !== true && status !== true) {
    return errorResponse({
      response,
      message: message || data?.message,
      data: newData,
      statusCode: data?.errorStatusCode ?? errorStatusCode,
      checks,
      errorCode,
    });
  }

  return successfulResp({
    response,
    data: newData,
    message: message || data?.message,
    checks,
    statusCode,
  });
};

export const errorHandler = (err, req: Request, res: Response) => {
  if (res.headersSent) {
    return;
  }

  const errorCode = err.statusCode || httpStatus.BAD_REQUEST;
  const message =
    err instanceof AppError
      ? err.message
      : 'We are unable to process your request. Please try again';

  logger.error({ err: err.cause || err });
  return errorResponse({
    response: res,
    message,
    errors: err.errorCode,
    statusCode: errorCode,
  });
};

export const routeNotFound = (req, res) => {
  errorResponse({
    response: res,
    message: "Oops! We can't find the url you are looking for",
    statusCode: httpStatus.NOT_FOUND,
  });
};

export const response = (
  status: boolean,
  message: string,
  meta?: ObjectLiteral | string,
  data?: any,
) => {
  return {
    status,
    meta,
    message,
    data,
  };
};
