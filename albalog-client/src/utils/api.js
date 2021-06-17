import axios from 'axios';

const client = axios.create();
client.defaults.baseURL = 'https://albalog-test.herokuapp.com/api/v1';
client.interceptors.request.use(
  function (config) {
    const user = JSON.parse(localStorage.getItem('user'));
    config.headers.Authorization = `Bearer ${user.token}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default client;