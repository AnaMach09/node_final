const express = require('express');
const transactionController = require('./transactionController');

const router = express.Router();

router.post('/debit/:userId/:amount', transactionController.debit);

module.exports = router;
