const Joi = require('joi');
const Product = require('../../database/store.model');

const productSchema = Joi.object({
  title: Joi.string().min(3).required(),
  price: Joi.number().positive().required(),
  userId: Joi.number().integer().positive().required(),
});

const addProduct = async (req, res) => {
  const { error } = productSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  console.log(error,'error');

  const product = await Product.create(req.body);
  console.log(product,'product');
  

  res.json(product);
};
const editProduct = async (req, res) => {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    console.log(error,'error');
  
    const product = await Product.findOne({ where: { id: req.params.id, userId: req.user.id, deletedAt: null } });
    if (!product) {
      return res.status(404).json({ message: 'Product not found or not allowed to edit' });
    }
    console.log(product,'product');
  
    await product.update(req.body);
    res.json(product);
  };
  const deleteProduct = async (req, res) => {
    const product = await Product.findOne({ where: { id: req.params.id } });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
  
    if (product.userId !== req.user.id && req.user.role.title !== 'admin') {
      return res.status(403).json({ message: 'Not allowed to delete this product' });
    }
    console.log(product,'product');
  
    await product.update({ deletedAt: new Date() });
    res.json({ message: 'Product deleted' });
  };

module.exports = {
    addProduct,
    editProduct,
    deleteProduct,
}