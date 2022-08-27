import { AxiosRequestConfig } from 'axios';

import { Storage } from '..';

type CustomRequest = {
  authorization?: string;
};

export const interceptorsAuthHeaders = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig & CustomRequest> => {
  const token = Storage.getToken();

  if (!token) return config;
  return {
    ...config,
    headers: {
      ...config.headers,
      token,
    },
  };
};
