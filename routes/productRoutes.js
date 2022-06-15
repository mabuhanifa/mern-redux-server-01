import express from "express";
import { getProductById, getProducts } from "../controllers/productController.js";
const router = express.Router();

// @desc   Get all products
// @route  GET /api/v1/products
// @access Public
router.route("/").get(getProducts)

// @desc   Get single product
// @route  GET /api/v1/products/:id
// @access Public

router.route("/:id").get(getProductById);

export default router;