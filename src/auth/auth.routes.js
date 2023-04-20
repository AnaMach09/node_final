const { register, login} = require('./auth.controler');
const validateRegister = require('./validationSchemas/register.validator');

const router = require('express').Router();

router.post('./register',validateRegister, register);
router.post('./login', login);

module.exports = router;