import express from "express"; // Importing Express for server-side routing and middleware
import mongoose from "mongoose"; // Importing Mongoose for MongoDB object modeling
import productRoute from "./routes/product.route.js"; // Importing routes related to products

const port = process.env.PORT || 8000; // Port for the server to listen on
const db_username = process.env.DB_USERNAME; // Database username from environment variables
const db_password = process.env.DB_PASSWORD; // Database password from environment variables

const app = express(); // Creating an instance of the Express application

// Middleware Setup
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded request bodies (e.g., form submissions)

// Routes
app.use("/api/products", productRoute); // Using the productRoute for all requests starting with /api/products

app.get("/", (req, res) => {
  res.send("Hello from NODE API Server"); // Responds with a simple message for the root route
});

// Connect to MongoDB
// - Connects to MongoDB using Mongoose with credentials (db_username, db_password) and connection string from environment variables.
// - On successful connection, starts the Express server.
// - Logs a success or failure message based on connection status.
mongoose
  .connect(
    `mongodb+srv://${db_username}:${db_password}@backenddb.f8r3w.mongodb.net/crud?retryWrites=true&w=majority&appName=BackendDB`
  )
  .then(() => {
    console.log("Connected to the database!"); // Log success message if connected to MongoDB
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`); // Log server start message with port number
    });
  })
  .catch(() => {
    console.log("Connection failed!"); // Log failure message if connection to MongoDB fails
  });
