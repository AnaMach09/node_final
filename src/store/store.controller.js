const StoreService = require('./store.service');

const getProducts = async (req, res) => {
    const { id, price, isDeleted, amount, userId } = req.query;
    const where = {deletedAt: null};
    if (price) {
            where.price = price;
          }
          if (userId) {
            where.userId = userId;
          }
          const products = await Product.findAll({ where });
            res.json(products);

    const data = await StoreService.getProducts({
        isDeleted,id, price, amount
    });
    console.log(data,'data');
    return res.json(
        {data: data}
    );

};
const deleteProduct = async (req, res) => {
    const { id } = req.params;
   
    const message = await StoreService.deleteProducts(id);
    console.log(message,'message');
    return res.json(message)

};

const updateProducts = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
   const message = await StoreService.updateProduct(id, payload);
   console.log(message,'message');
   res.json(message);


};
const createProducts = async (req, res) => {
    const payload = req.body;
    const message =  await StoreService.createProduct(payload);
    console.log(message,'message');
    return res.json(message);

};
const buyProduct = async (req, res) => {
    const product = await Product.findOne({ where: { id: req.params.id, deletedAt: null, soldAt: null } });
    if (!product) {
      return res.status(404).json({ message: 'Product not found or already sold' });
    }
  
    const seller = await User.findByPk(product.userId);
    const buyer = await User.findByPk(req.user.id);
    if (!seller || !buyer) {
      return res.status(404).json({ message: 'Seller or buyer not found' });
    }
  
    if (buyer.balance < product.price) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }}

  

module.exports = {
    getProducts,
    deleteProduct,
    updateProducts,
    createProducts,
    buyProduct
}