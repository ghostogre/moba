import axios from 'axios';

const http = axios.create({
  baseURL: '/web/api'
});

export default http;
