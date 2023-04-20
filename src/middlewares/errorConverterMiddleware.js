const { StatusCodes } = require('http-status-codes');
const ApiError = require('../error/apiError');

const errorConverterMiddleware = (err,req,res, next) => {

    let error = err;
    if(!(error instanceof ApiError)){
        error = new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'something went wrong');
    }
    next(error, req, res, next);
};

module.exports = errorConverterMiddleware;