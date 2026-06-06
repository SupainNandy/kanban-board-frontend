    import axios from "axios";

    const API = axios.create({
      baseURL: "https://kanban-board-5fnd.onrender.com/api", // Ensure this matches your backend's base URL
    });

    console.log("API URL:", API.defaults.baseURL); // Debugging line to confirm correct base URL

    API.interceptors.request.use(
      (config) => {
        const token =
          localStorage.getItem(
            "token"
          );

        if (token) {
          config.headers.Authorization =
            `Bearer ${token}`;
        }

        return config;
      }
    );

    export default API;