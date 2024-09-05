import express from "express";
import mongoose from "mongoose";
import productRoute from "./routes/product.route.js";
const port = process.env.PORT;
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from NODE API Server");
});

mongoose
  .connect(
    `mongodb+srv://${db_username}:${db_password}@backenddb.f8r3w.mongodb.net/crud?retryWrites=true&w=majority&appName=BackendDB`
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
