import axios from "axios";
import { getToken } from "./auth";

const instance = axios.create({
  // baseURL: import.meta.env.VITE_BACKEND_URL + "/api",
  // baseURL: "http://localhost:8000/api", // CRUD service
  baseURL: import.meta.env.VITE_BACKEND_URL + "/api", // CRUD service
});

instance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
