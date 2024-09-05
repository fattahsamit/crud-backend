import express from "express"; // Importing the Express library to create the router
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js"; // Importing the controller functions

// Creating a new instance of the Express router
const router = express.Router();

// @route   GET /api/products
// @desc    Get all products
// @controller getProducts - This controller handles fetching all products from the database.
router.get("/", getProducts);

// @route   GET /api/products/:id
// @desc    Get a single product by its ID
// @controller getProduct - This controller handles fetching a product by its unique ID.
router.get("/:id", getProduct);

// @route   POST /api/products
// @desc    Create a new product
// @controller createProduct - This controller handles creating a new product and saving it to the database.
router.post("/", createProduct);

// @route   PUT /api/products/:id
// @desc    Update an existing product by its ID
// @controller updateProduct - This controller handles updating the details of an existing product.
router.put("/:id", updateProduct);

// @route   DELETE /api/products/:id
// @desc    Delete a product by its ID
// @controller deleteProduct - This controller handles removing a product from the database by its ID.
router.delete("/:id", deleteProduct);

// Exporting the router for use in other parts of the application
export default router;
