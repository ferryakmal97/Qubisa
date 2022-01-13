import Axios from 'axios';
import {AUTH, BASE_URL} from '../config';

export const API = Axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {Authorization: AUTH},
});
