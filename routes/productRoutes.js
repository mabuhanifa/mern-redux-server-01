import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/Product";
const router = express.Router();

// @desc   Get all products
// @route  GET /api/v1/products
// @access Public
router.get("/", expressAsyncHandler( async (req, res) => {
    const products = await Product.find();
    res.json(products);
}
));

// @desc   Get single product
// @route  GET /api/v1/products/:id
// @access Public

router.get("/:id", expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product);
    }
    else{
        res.status(404).json({message: "Product not found"});
    }
    res.json(product);
}
));

export default router;