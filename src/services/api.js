import axios from 'axios';

// Instance Axios centralisée pointant vers le serveur Express
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export default api;
