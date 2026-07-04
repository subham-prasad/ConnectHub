import { getAccessToken } from "@/utils/localStorage";
import axios, { type AxiosInstance } from "axios";

const accessToken: string = getAccessToken();
const Axios: AxiosInstance = axios.create({
  // baseURL: process.env.BACKEND_BASE_URL,
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: accessToken ? `Bearer ${accessToken}` : "",
  },
});

export default Axios;


