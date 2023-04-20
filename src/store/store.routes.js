const router = require('express').Router();

const validateParamsId = require('../tools/validateParamsId');
const StoreController = require('./store.controller');
const {addProduct} = require('../auth/validationSchemas/store.validator');
const {editProduct} = require('../auth/validationSchemas/store.validator');
const{deleteProduct} = require('../auth/validationSchemas/store.validator');



router.get('/', StoreController.getProducts);

router.post('/',addProduct, StoreController.createProducts);

router.delete('/:id',deleteProduct, validateParamsId,  StoreController.deleteProduct);

router.put('/:id',editProduct, StoreController.updateProducts);




module.exports = router;