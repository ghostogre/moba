import axios from 'axios';

const http = axios.create({
  baseURL: '/web/api'
});

http.interceptors.response.use(
  response => {
    return Promise.resolve(response.data);
  },
  error => {
    return Promise.reject(error)
  }
)

export default http;
