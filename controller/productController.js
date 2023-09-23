const Product = require('../models/productModels')
const asyncHandler = require('express-async-handler')

// get all product
const getProducts = asyncHandler(async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    }catch(error) {
        throw new Error(error.message);
    }
})

// get a single product
const getProduct = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }catch(error) {
        throw new Error(error.message);
    }
})

// create a product
const createProduct = asyncHandler(async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }catch(error) {
        console.log(error.message);
        throw new Error(error.message);
    }
})

// update a product 
const updateProduct = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!Product) {
            res.status(404);
            throw new Error('cannot find any product with ID ${id}');
        }
        const updatedproduct = await Product.findById(id);
        res.status(200).json(updatedproduct);
    } catch(error) {
        throw new Error(error.message);
    }
})

// delete a product 
const deleteProduct = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product) {
            res.status(404);
            throw new Error('cannot find any product with ID ${id}');
        }
        res.status(200).json(product);
    } catch(error) {
        throw new Error(error.message);
    }
})

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}