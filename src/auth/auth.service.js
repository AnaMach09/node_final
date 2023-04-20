const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require("../database/user.model");
const ApiError = require('../error/apiError');
const { StatusCodes } = require('http-status-codes');

const validateUserPassword =  ({userPassword, passwordPayload}) => bcrypt.compareSync(passwordPayload,userPassword, process.env.SALT_AMOUNT);


const login = async ({email, password}) => {
    const user = await User.findOne({
        where:{
            email,
        }
    });
    if(!user) throw new ApiError(StatusCodes.NOT_FOUND);
    const isValidated = validateUserPassword({passwordPayload: password, userPassword: user.password});

    if(isValidated){
const payload = {
    userId: user.id,
};
   const token = jwt.sign(payload, process.env.SECRET,
    {expiresIn: '10m'});
    console.log(token,'token')
    return token;
 }
 throw new ApiError(StatusCodes.BAD_REQUEST);
};

module.exports = {login};