# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
    

**********************************************************************************************************************************

# Kanban Board Application

A Trello-style Kanban Board application built using the MERN Stack. Users can create tasks, update task details, drag and drop tasks between columns, and manage project workflows efficiently.

---

## Project Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas 
- Git

### Clone the Repository

```bash
git clone 
cd kanban-board
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

Run the backend server:

```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

Backend runs on:

```text
http://localhost:5000
```

---

## Technologies Used

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Zustand
- DnD Kit (Drag and Drop)
- Firebase(Google Authentication)

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Cors
- Socket.io
- dotenv
- firebase-admin

### Deployment

- Frontend: Vercel
- Backend: Render

---

## AI Tools Used During Development

The following AI tools were used to improve productivity and development speed:

- ChatGPT (Profesonal level Code generation, debugging, UI improvements, architecture guidance)
- Gemini (For Css)

### Areas Where AI Assisted

- MERN project structure setup
- Drag-and-drop implementation
- State management with Zustand
- Tailwind UI improvements
- Bug fixing and debugging
- Deployment guidance
- Profesonal Css
- Setup firebase

---

## Assumptions

- Each task belongs to one board.
- Users must be authenticated to manage tasks.
- Tasks can move only between predefined columns:
  - Todo
  - In Progress
  - Done
- Due dates are optional.

---

## Limitations

- No real-time collaboration.
- No task comments or attachments.
- No email notifications.
- No member invitation system.
- No activity history tracking.

---

## Features

- User Authentication
- Create Tasks
- Edit Tasks
- Delete Tasks
- Drag and Drop Tasks
- Due Date Management
- Responsive UI
- Persistent Data Storage

---

## Folder Structure

```text
project/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── store/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── config/
│
└── README.md
```

---

## Author

Supain Nandy