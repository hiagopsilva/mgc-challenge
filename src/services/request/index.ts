import Axios from 'axios';

import { REACT_APP_API_URL } from '~/utils';

export const request = Axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    accept: 'application/json',
  },
  timeout: 15000, // 15 seconds timeout
});

export default request;
