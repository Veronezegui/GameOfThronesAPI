import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.anapioficeandfire.com/api',
});

export default api;
