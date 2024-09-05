# Products-CRUD-Backend

## Overview

This project is a simple CRUD (Create, Read, Update, Delete) API built with Express.js and MongoDB using Mongoose for data modeling. The application allows you to perform basic operations on a `Product` resource.

## Features

- **Create**: Add new products to the database.
- **Read**: Retrieve a list of all products or get details of a specific product by ID.
- **Update**: Modify details of an existing product by ID.
- **Delete**: Remove a product from the database by ID.

## Technologies

- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB database (either local or MongoDB Atlas).

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/fattahsamit/products-crud-backend.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd crud-app
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a .env file in the root directory of the project and add your MongoDB connection details**:
   ```bash
   PORT=8000
   DB_USERNAME=mongodb-username
   DB_PASSWORD=mongodb-password
   ```

### Running the Application

1. **Start the server**:

   ```bash
   npm start
   ```

2. **Run the server in development mode with auto-reloading**:

   ```bash
   npm run dev
   ```

## API Endpoints

- **<span style="color: lightgreen;">GET</span> /api/products**: Retrieve all products. Optionally, add a limit query parameter to limit the number of results.
- **<span style="color: lightgreen;">GET</span> /api/products/:id**: Retrieve a single product by ID.
- **<span style="color: yellow;">POST</span> /api/products**: Create a new product. Requires a JSON body with product details.
- **<span style="color: skyblue;">PUT</span> /api/products/:id**: Update an existing product by ID. Requires a JSON body with updated product details.
- **<span style="color: red;">DELETE</span> /api/products/:id**: Update an existing product by ID. Requires a JSON body with updated product details.

## License

This project is licensed under the **MIT License**. See the [LICENSE](https://github.com/fattahsamit/products-crud-backend) file for details.

## Author

Fattah Samit - https://github.com/fattahsamit

This `README.md` provides a comprehensive overview of your project, installation steps, usage instructions, and additional details to help users get started with your CRUD application.
