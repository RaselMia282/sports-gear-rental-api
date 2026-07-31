import { ErrorRequestHandler } from 'express';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong!';

  
  if (err?.code?.startsWith('P')) {
    statusCode = 400;
    message = 'Database Operational Error!';
  }

  return res.status(statusCode).json({
    success: false,
    message,
   
    error: process.env.NODE_ENV === 'development' ? err : null,
    stack: process.env.NODE_ENV === 'development' ? err?.stack : null,
  });
};

export default globalErrorHandler;