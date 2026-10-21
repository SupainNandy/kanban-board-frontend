import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmOh_kb5R3ahoLyDe8qUCFm96fKby-7Ws",
  authDomain: "kanban-board-eb784.firebaseapp.com",
  projectId: "kanban-board-eb784",
  storageBucket: "kanban-board-eb784.firebasestorage.app",
  messagingSenderId: "894315102968",
  appId: "1:894315102968:web:25e6d9cb8556a32937f10d",
  measurementId: "G-M5P4G38J9P",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
