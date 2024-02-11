import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://ieeux7d90b.execute-api.us-east-1.amazonaws.com/prod-prod-v1-widget',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
