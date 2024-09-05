import mongoose from "mongoose";

// Define the schema for the Product model
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      // This field is required and must be given
      // Custom error message for missing product name
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
      // Default value if no quantity is specified
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
      // Optional field; product can exist without an image
    },
  },
  {
    timestamps: true,
    // Mongoose option to automatically add createdAt and updatedAt timestamps
  }
);

// Create a Mongoose model called 'Product' using the ProductSchema
const Product = mongoose.model("Product", ProductSchema);

export default Product;
