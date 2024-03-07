import axios from 'axios';
import dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/.env` });
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://passtilliosrepository.onrender.com',
});

export default axiosInstance;