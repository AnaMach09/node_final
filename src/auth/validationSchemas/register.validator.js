const Joi = require('joi');
const joiSchemaValidator = require('../../tools/joiSchemaValidator');

const validateRegister = async (req,res,next)=>{
    const schema = joi.object({
        nickName: Joi.string().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        balance: Joi.number().integer().min(0),
        email: Joi.string().email()
     });

     return joiSchemaValidator(next, req.body, schema);
};



 module.exports = validateRegister;