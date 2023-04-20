const bcrypt = require('bcrypt');
const User = require('../database/user.model');
const { StatusCodes } = require('http-status-codes');


const buyProduct = async (req, res) => {
   
      const buyerId = req.user.id;
      const { productId } = req.body;
  
      const product = await Product.findOne({
        where: { id: productId, deletedAt: null },
      });
  
      if (!product) throw new ApiError(StatusCodes.PRODUCT_NOT_FOUND);
  
      const sellerId = product.userId;
  
      if (buyerId === sellerId) throw new ApiError(StatusCodes.YOU_CANNOT_BUY_YOUR_OWN_PRODUCT);
  
      const buyer = await User.findByPk(buyerId);
      const seller = await User.findByPk(sellerId);
  
      if (!buyer || !seller) throw new ApiError(StatusCodes.USER_NOT_FOUND);
  
      if (buyer.balance < product.price) throw new ApiError(StatusCodes.INSUFFICIENT_BALANCE);
  
      await User.increment({ balance: -product.price }, { where: { id: buyerId } });
      await User.increment({ balance: product.price }, { where: { id: sellerId } });
  
      const sellHistory = await SellHistory.create({
        price: product.price,
        productId: product.id,
        sellerId,
        buyerId,
      });
  
      await Product.update({ soldAt: new Date() }, { where: { id: productId } });
  
      res.status(200).json(sellHistory);
    } ;
  
  module.exports = {
    buyProduct,
  }