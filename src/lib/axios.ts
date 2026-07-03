
import axios, {type AxiosInstance} from 'axios'

 const Axios: AxiosInstance = axios.create({
   // baseURL: process.env.BACKEND_BASE_URL,
   baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
   timeout: 1000,
   headers: { "Content-Type": "application/json" },
 });


export default Axios;


