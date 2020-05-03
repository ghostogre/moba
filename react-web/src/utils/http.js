import axios from 'axios';

const http = axios.create({
  baseURL: '/web/api'
});

http.interceptors.response.use(
  response => {
    return response.data;
  }
)

export default http;
