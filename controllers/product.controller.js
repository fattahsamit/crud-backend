import Product from "../models/product.model.js";

// @desc    Get all products
// @route   GET /api/products
// @access  Public
// @query   limit (optional) - limit the number of products returned
const getProducts = async (req, res) => {
  try {
    // Parse limit and page query parameter if provided
    let limit = parseInt(req.query.limit);
    let page = parseInt(req.query.page);

    // Validate limit and page, set defaults if invalid
    if (isNaN(limit) || limit <= 0) limit = 10;
    if (isNaN(page) || page <= 0) page = 1;

    // Calculate the products of items to skip
    const skip = (page - 1) * limit;

    // Fetch paginated products from the database
    const products = await Product.find({}).skip(skip).limit(limit);

    // Count the total number of products in the database
    const totalProducts = await Product.countDocuments({});

    // Return paginated products along with the total count
    res.status(200).json({ products, totalProducts });
  } catch (error) {
    // Handle any errors and return a 500 status with an error message
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
// @params  id - product ID
const getProduct = async (req, res) => {
  try {
    // Extract product ID from the request parameters
    const { id } = req.params;
    // Find product by ID
    const product = await Product.findById(id);
    // If product is not found, return a 404 error
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // If the product is found, return it
    res.status(200).json(product);
  } catch (error) {
    // Handle any errors and return a 500 status with an error message
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create product
// @route   POST /api/products
// @access  Public
// @body    name, quantity, price, etc. - product details in JSON format
const createProduct = async (req, res) => {
  try {
    // Create a new product using the request body
    const product = await Product.create(req.body);

    // Return the created product with a 201 status code
    res.status(201).json(product);
  } catch (error) {
    // Handle any errors and return a 500 status with an error message
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Public
// @params  id - product ID
// @body    name, quantity, price, etc. - product details to be updated
const updateProduct = async (req, res) => {
  try {
    // Extract product ID from the request parameters
    const { id } = req.params;

    // Find the product by ID and update it with the new data
    const product = await Product.findByIdAndUpdate(id, req.body);

    // If product is not found, return a 404 error
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Fetch the updated product to return the new data
    const updatedProduct = await Product.findById(id);

    // Return the updated product with a 200 status code
    res.status(200).json(updatedProduct);
  } catch (error) {
    // Handle any errors and return a 500 status with an error message
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Public
// @params  id - product ID
const deleteProduct = async (req, res) => {
  try {
    // Extract product ID from the request parameters
    const { id } = req.params;

    // Find the product by ID and delete it
    const product = await Product.findByIdAndDelete(id);

    // If product is not found, return a 404 error
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Return a success message with a 200 status code
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    // Handle any errors and return a 500 status with an error message
    res.status(500).json({ message: error.message });
  }
};

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
