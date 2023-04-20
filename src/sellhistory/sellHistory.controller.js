// controllers/sellHistory.js
const { User, Product, SellHistory } = require('../models');
const sellHistoryService = require('./sellHistory.service');

const buyProduct = safeControllerWrapper (async (req, res) => {
  const { id } = req.params;
  
 
  const message = await sellHistoryService.buyProduct(id);
  console.log(message, 'message')
  return res.json(message)

});




module.exports = {
  buyProduct,
}
