// routes/sellHistory.js
const express = require('express');
const router = express.Router();
const { buyProduct } = require('../controllers/sellHistory');
const checkAuth = require('../middlewares/checkAuth');

router.post('/buy', checkAuth, buyProduct);

module.exports = router;
