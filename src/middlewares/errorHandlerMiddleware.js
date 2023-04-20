const errorHandleMiddleware = (error,req, res, next) => {
    const { code, message }= error;
    return res.status(code).json({ message: 'something went wrong'});
};

module.exports = errorHandleMiddleware;