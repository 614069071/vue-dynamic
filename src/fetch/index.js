import axios from './axios';
import api from './api';

export default {
  login: data => axios.post(api.login, data)
};