import axios from './axios';
import api from './api';

class Request { }

Request.login = data => axios.post(api.login, data);

export default Request;