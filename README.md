# Employee and Area Management API

This project follows a **Client-Server Architecture**, where the backend serves as a **REST API** developed with **Node.js, Express, and Sequelize** to manage employees and areas within an organization. It communicates with a frontend client built in **Angular 19** and uses **MySQL** as its database.

---

## 🔥 Main Features

- 🛠 **CRUD for Employees and Areas**: Create, Read, Update, and Delete records.
- 🏢 **Entity Relationships**: Employees are associated with an area.
- 🔗 **REST API**: Structured to facilitate communication with frontend clients.
- ⚡ **Express & Sequelize**: Efficient frameworks for handling routes and databases.
- 🔒 **JWT Authentication**: Secure authentication using JSON Web Tokens.
- 🛑 **Error Handling & Validations**: Duplicate control and database constraints.
- 🔒 **CORS Enabled**: Allows communication between the backend and frontend.
- 🌱 **Database Seeding**: Pre-populated data for testing.

---

## 📂 Project Structure

```bash
📦 empleados-backend
 ┣ 📂 config
 ┃ ┣ 📜 config.json  # General backend configurations
 ┃ ┗ 📜 database.config.ts  # Database configuration
 ┣ 📂 src
 ┃ ┣ 📂 controllers   # Employee, area, and auth controllers
 ┃ ┣ 📂 models        # Sequelize model definitions
 ┃ ┣ 📂 middlewares   # Middleware for authentication
 ┃ ┣ 📂 routes        # API routes
 ┃ ┣ 📂 seeders       # Database seed files
 ┃ ┣ 📜 index.ts      # Main server file
 ┣ 📜 package.json
 ┣ 📜 tsconfig.json
 ┗ 📜 README.md
```

---

## 🚀 Technologies Used

- **Node.js + Express**
- **Sequelize (ORM for MySQL)**
- **TypeScript**
- **MySQL2**
- **JWT for authentication**
- **Body-parser** for request handling
- **CORS** for cross-origin communication

---

## 🛠 Installation & Setup

### Clone the repository:

```sh
git clone https://github.com/your-repo/empleados-backend.git
cd empleados-backend
```

### Install dependencies:

```sh
npm install
```

### Configure the environment variables:

1. Copy the example environment file:

   ```sh
   cp .env.example .env
   ```

2. Open `.env` and set your database connection details:

   ```sh
   DB_NAME=your_database_name #example: db-employees
   DB_USER=your_database_user #example: root
   DB_PASS=your_database_password
   DB_HOST=your_database_host #example: 127.0.0.1
   DB_DIALECT=mysql
   ```

### Run the API in development mode:

```sh
npm run dev
```

The API will be available at: **[http://localhost:3000/api](http://localhost:3000/api)**

---

## 📌 Available Endpoints

### 🔹 Authentication (`/api/auth`)

- **POST** `/login` - Authenticate and obtain a JWT token.
  
  **Note:** The authentication in this project is currently hardcoded for testing purposes. To log in, use the following credentials:
  
  ```sh
  Email: user@test.com
  Password: password123
  ```
  
  In a real application, user credentials should be validated against a database, and passwords should be securely hashed.

### 🔹 Employees (`/api/employee`)

- **GET** `/employees` - Get all employees (**Requires Authentication**).
- **GET** `/employee/:id` - Get an employee by ID (**Requires Authentication**).
- **POST** `/employee` - Create a new employee (**Requires Authentication**).
- **PUT** `/employee/:id` - Update an employee (**Requires Authentication**).
- **DELETE** `/employee/:id` - Delete an employee (**Requires Authentication**).

### 🔹 Areas (`/api/area`)

- **GET** `/areas` - Get all areas (**Requires Authentication**).
- **GET** `/area/:id` - Get an area by ID (**Requires Authentication**).
- **POST** `/area` - Create a new area (**Requires Authentication**).
- **PUT** `/area/:id` - Update an area (**Requires Authentication**).
- **DELETE** `/area/:id` - Delete an area (**Requires Authentication**).

---

## 🌱 Database Seeding

Sequelize allows you to seed the database with initial test data using seeders.

### Running Seeders

1. Ensure your database is set up and migrated:
   ```sh
   npx sequelize-cli db:migrate
   ```

2. Run the seeders to populate the database:
   ```sh
   npx sequelize-cli db:seed:all
   ```

This will populate the database with predefined areas and employees.

### Rolling Back Seeders
If needed, you can undo the seeded data with:
   ```sh
   npx sequelize-cli db:seed:undo:all
   ```

---

## 🔑 Authentication Mechanism

- Users authenticate by sending a **POST** request to `/api/auth/login` with valid credentials.
- If authenticated successfully, the server returns a **JWT token**.
- To access protected routes, include the **JWT token** in the request headers:
  
  ```sh
  Authorization: Bearer <your_token>
  ```
- The `verifyToken` middleware ensures that requests to `/api/employee` and `/api/area` require authentication.

---

## 🔗 Related Projects

This API is designed to work with the **Employee and Area Management Frontend**, built with **Angular 19**.  
You can find the frontend repository here: [empleados-frontend](https://github.com/rfloresj/empleados-frontend)

---

This API provides a **secure, scalable, and efficient** way to manage employees and areas in an organization. 🚀

