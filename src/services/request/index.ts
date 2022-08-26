import Axios from 'axios';

import { REACT_APP_API_URL } from '~/utils';

import { interceptorsAuthHeaders } from './interceptors';

export const request = Axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    accept: 'application/json',
  },
  timeout: 30000, // 15 seconds timeout
});

request.interceptors.request.use(interceptorsAuthHeaders);

export default request;
