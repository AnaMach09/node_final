const express = require('express');
const router = express.Router();


const storeRoutes = require('./store/store.routes');
const userRoutes = require('./user/user.routes');
const authRoutes = require('./auth/auth.routes');
const checkToken  = require('./auth/auth.middleware')


router.use('/store', storeRoutes);
router.use('/auth', authRoutes);
router.use(checkToken);
router.use('/user', userRoutes);

module.exports = router;



