import axios from "axios";
import { Message } from "element-ui";
import Status from "./status";

const baseURL = process.env.VUE_APP_URL;
const serve = axios.create({ baseURL, timeout: 6000 });

serve.interceptors.request.use(config => {
  config.headers.token = 'token';
  return config;
}, err => Promise.reject(err));

serve.interceptors.response.use(response => {
  return response;
}, err => {
  const message = Status[err.code] || '服务器异常';
  Message.error(message);
  return Promise.reject(err.response);
});

export default serve;
