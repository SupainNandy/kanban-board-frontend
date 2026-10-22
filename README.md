# 📋 Kanban Board — Task Management System (Frontend)

A full-stack Kanban Board application designed to organize tasks, track progress, and manage workflows through a visual task-management interface. The project combines a modern web frontend with a Node.js backend, MongoDB for data persistence, and Socket.IO for real-time communication.

## 🚀 Project Overview

The Kanban Board provides a structured way to manage work by organizing tasks into workflow stages. It is built to demonstrate practical full-stack development concepts, including REST API development, database integration, authentication, and real-time communication.

The backend is developed with **Node.js and Express.js**, with MongoDB and Mongoose handling data persistence. JWT and Firebase Admin SDK dependencies support authentication-related functionality.

## ✨ Key Features

- 📋 **Visual Task Management** — Organize work using a Kanban-style workflow.
- 🔄 **Task Workflow** — Track task progress across workflow stages, where implemented.
- ⚡ **Real-Time Communication** — Socket.IO integration for event-driven communication.
- 🔐 **Authentication Support** — JWT and Firebase Admin SDK integration.
- 🗄️ **Database Integration** — MongoDB with Mongoose for storing application data.
- 🌐 **RESTful Backend** — Express.js server for handling application requests.
- ⚙️ **Environment Configuration** — Environment variables for database credentials and authentication configuration.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework and HTTP APIs |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modeling |
| Socket.IO | Real-time, event-based communication |
| JSON Web Token (JWT) | Token-based authentication support |
| Firebase Admin SDK | Firebase server-side integration |
| dotenv | Environment variable management |
| CORS | Cross-origin request configuration |

## 🏗️ Architecture

```text
                 ┌──────────────────────┐
                 │    Web Frontend      │
                 │   User Interface     │
                 └──────────┬───────────┘
                            │
                  HTTP / Socket.IO
                            │
                 ┌──────────▼───────────┐
                 │   Node.js Server     │
                 │   Express.js APIs    │
                 │   Socket.IO          │
                 └──────────┬───────────┘
                            │
                 ┌──────────▼───────────┐
                 │      MongoDB         │
                 │   Mongoose Models    │
                 └──────────────────────┘
```

The frontend communicates with the backend through HTTP requests and, where configured, Socket.IO connections. The backend processes requests and interacts with MongoDB to persist application data.

## 📂 Project Structure

```text
kanban-board/
├── src/
│   ├── app.js
│   ├── config/
│   │   └── db.js
│   └── ...
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

- `server.js` — Loads environment variables, initializes the application, and starts the server.
- `src/app.js` — Application entry module for configuring the Express server.
- `src/config/db.js` — Database connection configuration.
- `.env.example` — Example environment configuration.

## ⚙️ Getting Started

### Prerequisites

Before running the project, make sure you have:

- [Node.js](https://nodejs.org/) installed.
- npm installed.
- [MongoDB](https://www.mongodb.com/) running locally or a MongoDB Atlas connection string.
- Git installed.

### 1. Clone the Repository

```bash
git clone https://github.com/SupainNandy/kanban-board.git
cd kanban-board
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root directory using `.env.example` as a reference.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_random_secret
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY="your_firebase_private_key"
```

Replace the example values with your actual configuration. Use the exact variable names expected by the application code.

**Security note:** Never commit your `.env` file or real credentials to GitHub. Keep private keys and authentication secrets secure.

### 4. Start the Backend

```bash
npm start
```

The server is configured to use port `5000` by default.

Once the server starts, the backend will attempt to connect to MongoDB. Check your terminal for startup messages and any database connection errors.

## 🔐 Security# 📋 Kanban Board — Task Management System

A full-stack Kanban Board application designed to organize tasks, track progress, and manage workflows through a visual task-management interface. The project combines a modern web frontend with a Node.js backend, MongoDB for data persistence, and Socket.IO for real-time communication.

## 🚀 Project Overview

The Kanban Board provides a structured way to manage work by organizing tasks into workflow stages. It is built to demonstrate practical full-stack development concepts, including REST API development, database integration, authentication, and real-time communication.

The backend is developed with **Node.js and Express.js**, with MongoDB and Mongoose handling data persistence. JWT and Firebase Admin SDK dependencies support authentication-related functionality.

## ✨ Key Features

- 📋 **Visual Task Management** — Organize work using a Kanban-style workflow.
- 🔄 **Task Workflow** — Track task progress across workflow stages, where implemented.
- ⚡ **Real-Time Communication** — Socket.IO integration for event-driven communication.
- 🔐 **Authentication Support** — JWT and Firebase Admin SDK integration.
- 🗄️ **Database Integration** — MongoDB with Mongoose for storing application data.
- 🌐 **RESTful Backend** — Express.js server for handling application requests.
- ⚙️ **Environment Configuration** — Environment variables for database credentials and authentication configuration.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework and HTTP APIs |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modeling |
| Socket.IO | Real-time, event-based communication |
| JSON Web Token (JWT) | Token-based authentication support |
| Firebase Admin SDK | Firebase server-side integration |
| dotenv | Environment variable management |
| CORS | Cross-origin request configuration |

## 🏗️ Architecture

```text
                 ┌──────────────────────┐
                 │    Web Frontend      │
                 │   User Interface     │
                 └──────────┬───────────┘
                            │
                  HTTP / Socket.IO
                            │
                 ┌──────────▼───────────┐
                 │   Node.js Server     │
                 │   Express.js APIs    │
                 │   Socket.IO          │
                 └──────────┬───────────┘
                            │
                 ┌──────────▼───────────┐
                 │      MongoDB         │
                 │   Mongoose Models    │
                 └──────────────────────┘
```

The frontend communicates with the backend through HTTP requests and, where configured, Socket.IO connections. The backend processes requests and interacts with MongoDB to persist application data.

## 📂 Project Structure

```text
kanban-board/
├── src/
│   ├── app.js
│   ├── config/
│   │   └── db.js
│   └── ...
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

- `server.js` — Loads environment variables, initializes the application, and starts the server.
- `src/app.js` — Application entry module for configuring the Express server.
- `src/config/db.js` — Database connection configuration.
- `.env.example` — Example environment configuration.

## ⚙️ Getting Started

### Prerequisites

Before running the project, make sure you have:

- [Node.js](https://nodejs.org/) installed.
- npm installed.
- [MongoDB](https://www.mongodb.com/) running locally or a MongoDB Atlas connection string.
- Git installed.

### 1. Clone the Repository

```bash
git clone https://github.com/SupainNandy/kanban-board.git
cd kanban-board
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root directory using `.env.example` as a reference.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_random_secret
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY="your_firebase_private_key"
```

Replace the example values with your actual configuration. Use the exact variable names expected by the application code.

**Security note:** Never commit your `.env` file or real credentials to GitHub. Keep private keys and authentication secrets secure.

### 4. Start the Backend

```bash
npm start
```

The server is configured to use port `5000` by default.

Once the server starts, the backend will attempt to connect to MongoDB. Check your terminal for startup messages and any database connection errors.

## 🔐 Backend Part:
github-repo-> https://github.com/SupainNandy/kanban-board
