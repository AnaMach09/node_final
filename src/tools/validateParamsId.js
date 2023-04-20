const Joi = require('joi');
const joiSchemaValidator = require('./joiSchemaValidator');

const validateParamsId = (req,res, next) => {
    const schema = Joi.object({
        id: Joi.number().integer().required()
    });

    return joiSchemaValidator(next, req.params, schema);
};

module.exports = validateParamsId;
