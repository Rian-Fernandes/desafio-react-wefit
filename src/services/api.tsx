import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://wefit-movies.vercel.app/api", // Corrigindo a URL da API
});

export default api;
