import Axios from 'axios';
import { getCookie } from 'cookies-next';

export const axios = Axios.create({
  baseURL: "http://localhost:8090",
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(async (config) => {
  const token = getCookie("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});