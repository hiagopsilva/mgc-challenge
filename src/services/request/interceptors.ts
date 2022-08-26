import { AxiosRequestConfig } from 'axios';

type CustomRequest = {
  authorization?: string;
};

export const interceptorsAuthHeaders = async (
  config: AxiosRequestConfig,
): Promise<AxiosRequestConfig & CustomRequest> => {
  // const token = Storage.getToken();
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluIiwiaWF0IjoxNjYxNDgzNDcxLCJleHAiOjE2OTI1ODc0NzF9.Lj544hL6auG08ojuBba3urVUoNBAPHXyTKiu7sytp44';

  if (!token) return config;
  return {
    ...config,
    headers: {
      ...config.headers,
      token,
    },
  };
};
