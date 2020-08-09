import axios from 'axios';

const api = axios.create({
  baseURL: 'http://26.46.93.5:3333'
});

export default api;