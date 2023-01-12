import axios from "axios";

const baseUrl =
  "https://pf-henry-backend-production.up.railway.app" ||
  process.env.BACKEND_URL;

const clientAxios = axios.create({
  baseURL: baseUrl,
});

export default clientAxios;
