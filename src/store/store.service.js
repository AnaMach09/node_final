const Product = require('../database/store.model');
// const store = require('./store');
// const { deleteProduct } = require('./store.controller');
const { Op} = require('sequelize');
const User = require('../database/user.model');

const getProducts = async (req, res) => {
    try {
      const filters = {
        deletedAt: null,
      };
  
      if (req.query.price) {
        filters.price = req.query.price;
      }
  
      if (req.query.userId) {
        filters.userId = req.query.userId;
      }
  
      const products = await Product.findAll({ where: filters });
      res.status(200).json(products);
    } catch (error) {
    }
  };

// const getProducts = async ({
//     isDeleted,
//     amount,
//     price,
//     id
// }) => {

//     // const filter = {
//     //     ...(id && { id }),
//     //     ...(isDeleted !== undefined &&  (isDeleted ? { deletedAt: null} : {deletedAt: [Op.not]: null})),
//     //     ...(amount && { amount }),
//     //     ...(price && { price }),

//     // }
//     // const products = await Product.findAll({
//     //     where {
//     //         ...filter,
//     //     }
//     // });
//     // return products;
// };
    // if (!(isDeleted && amount)) return {};

    // const dataToReturn = store.filter((e) => e.isDeleted === +isDeleted &&
    //  e.amount === +amount &&
    //  e.id === +id &&
    //  e.price === +price
    //  );

    // return dataToReturn;


// const getProductById = (id) => store.find((e) => e.id === +id);
// const getProductIndex = (id) => store.findIndex((e) => e.id === +id)

const deleteProduct = async (id) => {
     const product = await Product.findByPk(id);

    if (!product && product.isDeleted) throw new ApiError(StatusCodes.USER_NOT_FOUND);
    product.deletedAt = new Date();
    // await Product.update({ deletedAt: new Date()}, {where: {id}})
    await product.save();
    return { message: "PRODUCT_DELETED"}
};

const updateProduct = async ({ id, payload }) => {
    const product = await Product.findByPk(id);

    if(!product)throw new ApiError(StatusCodes.USER_NOT_FOUND);

    await Product.update(payload,{where: {
        id,
    }});
    return { message: 'UPDATED'}
};
const createProduct =async (payload) => {
    const product = await Product.findOne({
        where: {
            title: payload.title,
            price: payload.price,
        }
    })
    if(product) return {message: "already_exist"};
    await Product.create(payload);
    console.log(message,'message');

    return { message: 'created'}
};


module.exports = {
    getProducts,
    deleteProduct,
    updateProduct,
    createProduct,
}