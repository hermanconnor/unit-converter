/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const isDev = req.app.get('env') === 'development';

  res.locals.message =
    err instanceof Error ? err.message : 'An unknown error occurred';

  res.locals.error = isDev ? err : {};

  res.status(err.statusCode || 500);
  res.render('error');
};

export default errorHandler;
