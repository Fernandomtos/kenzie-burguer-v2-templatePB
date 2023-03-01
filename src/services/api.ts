import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hamburgueria-kenzie-v2.herokuapp.com',
  timeout: 3000,
});

export default api;
