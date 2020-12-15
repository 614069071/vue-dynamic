import axios from './axios';
import api from './api';

export const login = data => axios.post(api.login, data);