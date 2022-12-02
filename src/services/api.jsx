import axios from 'axios';

export default axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  timeout: 10000,
  headers: { 'Content-type': 'application.json' }
});