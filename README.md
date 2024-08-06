# Register, Like and Delete a Product from Database

This project allows users to register, like, and delete products from a database. 


----
## Note

> **🔔 Note:** This project is just a part of my Full-Stack E-Commerce Website.


----

## Features

- **Register Product**: Users can register new products.
- **Like Product**: Users can like or unlike products.
- **Delete Product**: Users can delete products.

## Technologies Used

- **Frontend**:
  - React.js
  - Tailwind CSS
  - DaisyUI
  - Axios for HTTP requests
  - React Hot Toast for notifications

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB with Mongoose for database
  - Axios for HTTP requests

- **Others**:
  - Git for version control

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/RishabhRaj43/Like-Delete-Register-feature-in-E-Commerce.git
    cd Like-Delete-Register-feature-in-E-Commerce
    ```

2. **Install dependencies**:

    For backend:
    ```bash
    cd backend
    npm install
    ```

    For frontend:
    ```bash
    cd frontend
    npm install
    ```

3. **Start the development server**:

    For backend:
    ```bash
    npm run server
    ```

    For frontend:
    ```bash
    npm run dev
    ```

## Usage

1. **Register a Product**:
   - Enter the product name and submit (like is false by default).

2. **Like a Product**:
   - Click on the like button for a product. The button's color will change to indicate the like status.

3. **Delete a Product**:
   - Click on the delete button for a product. The product will be removed from the database.

## API Endpoints

- **GET /api/**: Fetch all products
- **POST /api/**: Register a new product
- **POST /api/like/:id**: Like or unlike a product
- **DELETE /api/delete/:id**: Delete a product



============================================================

<h1 style="color:blue;">Happy Coding 🎉</h1>
