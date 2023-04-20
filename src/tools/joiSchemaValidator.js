const Api = require('../error/apiError');

const joiSchemaValidator = async (next, data, schema ) => {
    try {
        await schema.validateAsync(data);
        }catch(e){
           const { details} = e;
           const message = details[0]?.message;
           next(new ApiError(StatusCodes.BAD_REQUEST, message))
        }
};

module.exports = joiSchemaValidator;