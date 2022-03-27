import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const router = express.Router();

// GET /api/products/
// Fetch all products
// PUBLIC
router.get('/', asyncHandler(async(req, res) => {

    //find({}) returns all data in database
    const products = await Product.find({});
    res.json(products);
}) )

// GET /api/products/:id
// Fetch single products
// PUBLIC
router.get('/:id', asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product)
    } else {
        res.status(404);
        throw new Error('Product not found!');
    }
}))


export default router;