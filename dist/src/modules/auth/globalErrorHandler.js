import AppError from '../../errors/apperror.js';
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Something went wrong!';
    if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
    }
    else if (err?.code === 'P2002') {
        statusCode = 400;
        const target = err.meta?.target ? ` (${err.meta.target})` : '';
        message = `Duplicate field value entered${target}`;
    }
    else if (err?.code?.startsWith('P')) {
        statusCode = 400;
        message = 'Database Operational Error!';
    }
    res.status(statusCode).json({
        success: false,
        message,
        error: process.env.NODE_ENV === 'development' ? err : null,
        stack: process.env.NODE_ENV === 'development' ? err?.stack : null,
    });
};
export default globalErrorHandler;
//# sourceMappingURL=globalErrorHandler.js.map