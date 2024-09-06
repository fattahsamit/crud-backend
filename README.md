# Products-CRUD-Backend

## Overview

This project is a simple CRUD (Create, Read, Update, Delete) API built with Express.js and MongoDB using Mongoose for data modeling. The application allows you to perform basic operations on a `Product` resource.

## Features

- **Create**: Add new products to the database.
- **Read**: Retrieve a list of all products or get details of a specific product by ID.
- **Update**: Modify details of an existing product by ID.
- **Delete**: Remove a product from the database by ID.

## Technologies

<p align="center">
    <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,postman" />
</p>

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

## Testing

### Import Postman Collection

To test the API endpoints with Postman, you can use the provided Postman collection. Follow these steps to import the collection:

1. Open Postman
2. Import the [Postman Collection](https://www.postman.com/universal-zodiac-887192/workspace/showcase/collection/28308550-c7fa793f-1708-48ee-b1bc-51b19db87a5b?action=share&creator=28308550), use the `JSON` file provided in the testing folder
3. Use the Collection:
   - Once imported, you will find the collection in the left sidebar under Collections.
   - Expand the collection to see the available requests.
   - Click on a request to view and send it.
   - Modify the request details if needed (e.g., change the endpoint URL or add query parameters).

### Example Requests in Postman

To test the API endpoints with Postman, you can use the provided Postman collection. Follow these step

- Get All Products with a Limit:

  - Select the **GET** request for **/api/products**.
  - Add a query parameter **limit** with a value (e.g. 5).
  - Click **Send** to see the response.

- Post a New Product:

  - Select the **POST** request for **/api/products**.
  - In the **Body** tab, select **raw** and choose **JSON** from the dropdown.
  - Enter the product details in **JSON** format, for example:

  ```bash
   {
  "name": "New Product",
  "quantity": 15,
  "price": 120
  }
  ```

  - Click **Send** to create the new product.

### Automated Testing with Postman

You can add test scripts in Postman to automatically validate responses. Here is an example of test scripts that you can include in Postman for automated testing of API responses:

**Example Test Scripts:**

- Test for **POST /api/products**:

```bash
pm.test("Status code is 201", () => {
    pm.response.to.have.status(201);
});

const response = pm.response.json();
const product = response._id;
pm.collectionVariables.set("product", product);
```

**Running Tests in Postman:**

1. Test scripts are already added. Data can be modified, click the `Send` button on any request, and Postman will automatically run the tests after receiving a response.
2. The results of the tests will be displayed under the `Tests` tab of the response panel.

## License

This project is licensed under the **MIT License**. See the [LICENSE](https://github.com/fattahsamit/products-crud-backend/blob/main/LICENSE) file for details.

## Future Implementations

1. **Search**: Enable keyword search for products.
2. **Sorting**: Implement sorting by attributes like price or name.
3. **Rate Limiting**: Prevent abuse with rate limiting.
4. **Caching**: Use caching to improve performance and reduce database load.
5. **API Documentation**: Provide interactive API documentation with Swagger.

## Author

Fattah Samit - https://github.com/fattahsamit

This `README.md` provides a comprehensive overview of your project, installation steps, usage instructions, and additional details to help users get started with your CRUD application.
