# Flow Distribution API

## Overview

This is a **Node.js Express API** for managing astrologers and users. It includes functionality to:

- **Register Astrologers**
- **Create Users**
- **Assign Users to Astrologers** (Fair flow distribution algorithm)

The API uses **MongoDB** for data storage and **Swagger** for API documentation.

---

## Installation and Setup

### **1. Clone the Repository**

```bash
git clone <repository-url>
cd <project-folder>
```

### **2. Install Dependencies**

```bash
npm install
```

### **3. Start the Node.js Server**

```bash
npm run dev
```

- The server will run on `` (or as configured in your environment).

---

## API Endpoints

### **1. Register an Astrologer**

- **Endpoint:** `POST /api/astrologer/registerAstrologer`
- **Description:** Registers a new astrologer.
- **Request Body (JSON):**
  ```json
  {
     "fname":"sandip",
    "lname":"sir",
    "email":"sandip@gmail.com",
    "password":"987654321",
    "phone":"7845524685"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User created successfully",
    "data": {
        "fname": "sandip",
        "lname": "sir",
        "fullname": "sandip sir",
        "phone": "7845524685",
        "email": "sandip@gmail.com",
        "password": "$2b$10$cFU/iZwXTxB/itpxh89z..iuaAkzzRktTMofXLCxqpTnFS.tM1gve",
        "connectedUsers": [],
        "ranks": 1,
        "isTopAstrologer": false,
        "profilePic": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQj5N93dERZzoGwY2hFoIRr435y5gSIUOVlguafyKFlDiKEEL6q",
        "status": true,
        "_id": "6799e3de1d2b2c31b722dfa3",
        "createdAt": "2025-01-29T08:16:30.028Z",
        "updatedAt": "2025-01-29T08:16:30.028Z",
        "__v": 0
    }
  }
  ```

---

### **2. Create a User**

- **Endpoint:** `POST /api/user/create-user`
- **Description:** Creates a new user.
- **Request Body (JSON):**
  ```json
  {
       "fname":"rahul",
    "lname":"mishra",
    "email":"rahul@gmail.com",
    "password":"987654321",
    "phone":"7845215684"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User created successfully",
    "user": {
        "fname": "rahul",
        "lname": "mishra",
        "fullname": "rahul mishra",
        "email": "rahul@gmail.com",
        "password": "$2b$10$McEkwWziHWm1DWKuXVir0u1ZvWpetfM.hwz/D7R5qV0bWpsFhmw0e",
        "phone": "7845215684",
        "profilePic": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQj5N93dERZzoGwY2hFoIRr435y5gSIUOVlguafyKFlDiKEEL6q",
        "status": true,
        "_id": "6799e4151d2b2c31b722dfac",
        "createdAt": "2025-01-29T08:17:25.274Z",
        "updatedAt": "2025-01-29T08:17:25.274Z",
        "__v": 0
    }
  }
  ```

---

### **3. Assign a User to an Astrologer**

- **Endpoint:** `POST /api/astrologer/assignuser/:userId`
- **Description:** Assigns a user to an astrologer using a **fair distribution algorithm**.
- **Request Example:**
  ```bash
  POST http://localhost:8010/api/astrologer/assignuser/64f223456789abc123456789
  ```
- **Response:**
  ```json
  {
     "message": "User successfully assigned to an astrologer",
    "astrologer": {
        "id": "6799e3ac1d2b2c31b722df9c",
        "fullname": "balaji sir",
        "email": "balaji23@gmail.com",
        "connectedUsers": 1,
        "isTopAstrologer": false
    }
  }
  ```

---

## Swagger API Documentation

Swagger provides an interactive UI to explore and test API endpoints.

### **Start Swagger UI**

1. Run the server: `npm start`
2. Open Swagger UI: [http://localhost:8010/api-docs](http://localhost:8010/api-docs)

---

## Notes

- Ensure **MongoDB** is running before starting the server.
- Use **Postman** or **Swagger UI** to test the APIs.

### **Author**

Developed by **[Your Name]**

