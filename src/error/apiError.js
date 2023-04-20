class ApiError extends Error {
    constructor(code, message) {
        super();
        this.message = message;
        this.code = code;
        this.stack = Error.captureStackTrace;
    }
}

class NotFoundException extends Error{
    constructor(message){
        super();
        this.code = 404;
        this.message = message;

    }
}

module.exports = ApiError;