const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')

//this will retrieve ALL products
const getProducts = asyncHandler(async(req, res) => { //the logic from the productRoute for getting all prods
    try {
        const products = await Product.find({}) 
        res.status(200).json(products) //put the product display in json
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

//this will retrieve a single prod
const getProduct = asyncHandler (async(req, res)=> {
    try {
        const {id} = req.params; //deconstruct the id from the request params
        const product = await Product.findById(id); //instead of using find all prods, use the function to search it by id 
        res.status(200).json(product);
    } catch (error) {
        res.status(500); //error middleware doesnt work with async, need express-async handler
        throw new Error(error.message);
        //res.status(500).json({message: error.message})
    }
})

//route for saving data into database
const createProduct = asyncHandler(async(req, res) => {
    try{
        //since we need to save data to database, we have to save it through product Model
        //when interacting with database, use await
        const product = await Product.create(req.body); //creating new product in the database
        res.status(200).json(product);
        
        } catch (error) {
            res.status(500);
            throw new Error(error.message);
        }
         
})

//for updating and editing a product in database
const updateProduct = asyncHandler(async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body); //use update function with 2 parameters, the id and the new change for product 
        if(!product){ //check if product was found in the database
            res.status(404);
            throw new Error(`Cannot find any product with this ID ${id}`);
        }
        const updatedProd = await Product.findById(id);
        res.status(200).json(updatedProd);

    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
 })

  // for removing/deleting a product from database
const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product) {
            res.status(404);
            throw new Error(`Cannot find any product with this ID ${id}`);
           // return res.status(404).json({message: `Cannot find any product with this ID ${id}`})
        }
        res.status(200).json(product) //if product is successfully deleted, return the prod deleted 

    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
 })

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct

}