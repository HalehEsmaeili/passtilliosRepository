import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:'http://localhost:3004',
});
//baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3004',

export default axiosInstance;