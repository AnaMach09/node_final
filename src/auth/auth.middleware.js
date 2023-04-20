const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const ApiError = require('../error/apiError');

const checkToken = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];

        if(!token) throw new Error('unauthorized');

         jwt.verify(token, process.env.SECRET );
         console.log(token,'token')
         return next();
    } catch(e) {
       return next(new ApiError(StatusCodes.UNAUTHORIZED, 'unauthorized'))
    }
};


module.exports = checkToken;