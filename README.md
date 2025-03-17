# Employee and Area Management API

This project is a **REST API** developed with **Node.js, Express, and Sequelize** that enables the management of employees and areas within an organization. It is designed to integrate with a frontend and uses **MySQL** as its database.

---

## 🔥 Main Features

- 🛠 **CRUD for Employees and Areas**: Create, Read, Update, and Delete records.
- 🏢 **Entity Relationships**: Employees are associated with an area.
- 🔗 **REST API**: Structured to facilitate communication with frontend clients.
- ⚡ **Express & Sequelize**: Efficient frameworks for handling routes and databases.
- 🛑 **Error Handling & Validations**: Duplicate control and database constraints.
- 🔒 **CORS Enabled**: Allows communication between the backend and frontend.

---

## 📂 Project Structure

```bash
📦 empleados-backend
 ┣ 📂 src
 ┃ ┣ 📂 controllers   # Employee and area controllers
 ┃ ┣ 📂 models        # Sequelize model definitions
 ┃ ┣ 📂 routes        # API routes
 ┃ ┣ 📜 index.ts      # Main server file
 ┃ ┗ 📜 database.config.ts  # Database configuration
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

### Configure the database in `config/database.config.ts` if necessary.

### Run the API in development mode:

```sh
npm run dev
```

The API will be available at: **[http://localhost:3000/api](http://localhost:3000/api)**

---

## 📌 Available Endpoints

### 🔹 Employees (`/api/employee`)

- **GET** `/employees` - Get all employees.
- **GET** `/employee/:id` - Get an employee by ID.
- **POST** `/employee` - Create a new employee.
- **PUT** `/employee/:id` - Update an employee.
- **DELETE** `/employee/:id` - Delete an employee.

### 🔹 Areas (`/api/area`)

- **GET** `/areas` - Get all areas.
- **GET** `/area/:id` - Get an area by ID.
- **POST** `/area` - Create a new area.
- **PUT** `/area/:id` - Update an area.
- **DELETE** `/area/:id` - Delete an area.

---

## 🔗 Related Projects

This API is designed to work with the **Employee and Area Management Frontend**, built with **Angular 19**.  
You can find the frontend repository here: [empleados-frontend](https://github.com/rfloresj/empleados-frontend)

---

This API provides a **scalable and efficient** way to manage employees and areas in an organization. 🚀

