import axios from "axios";
import { Message } from "element-ui";

const baseURL = process.env.VUE_APP_URL;
const serve = axios.create({ baseURL, timeout: 6000 });

serve.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => Promise.reject(err)
);

serve.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          Message.error("错误请求");
          break;
        case 401:
          Message.error("未授权，请重新登录");
          break;
        case 403:
          Message.error("拒绝访问");
          break;
        case 404:
          Message.error("请求错误,未找到该资源");
          break;
        case 405:
          Message.error("请求方法未允许");
          break;
        case 408:
          Message.error("请求超时");
          break;
        case 500:
          Message.error("服务器端出错");
          break;
        case 501:
          Message.error("网络未实现");
          break;
        case 502:
          Message.error("网络错误");
          break;
        case 503:
          Message.error("服务不可用");
          break;
        case 504:
          Message.error("网络超时");
          break;
        case 505:
          Message.error("http版本不支持该请求");
          break;
        default:
          Message.error(`连接错误${err.response.status}`);
      }
    } else {
      Message.error("连接到服务器失败");
    }
    return Promise.reject(err.response);
  }
);

export default serve;
