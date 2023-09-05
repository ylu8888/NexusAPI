const express = require('express');
const router = express.Router();
const Product = require('../models/productModel')
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController')

//the CRUD operations for accessing the products in the database are in controllers, following MVC architecture
//route for saving data into database
router.post('/', createProduct)

//for fetching and getting data from database
//this will retrieve ALL products
router.get('/', getProducts)

//this will retrieve product by ID
router.get('/:id', getProduct)

//for updating and editing a product in database
router.put('/:id', updateProduct)

//for removing/deleting a product from database
router.delete('/:id', deleteProduct) 


module.exports = router;