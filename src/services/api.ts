import axios from 'axios';

interface IHttpRequest {
  method: string;
  url: string;
  body?: any;
}

const api = async (params: IHttpRequest): Promise<any> => {
  const { method = 'get', url = '', body } = params;

  const headers: any = { 'Content-Type': 'application/json' };
  const token = localStorage.getItem('token');
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const axiosConfig: any = {
    method,
    url,
    headers,
  };
  if (body) {
    axiosConfig.body = JSON.stringify(body);
  }
  console.log('Config ', axiosConfig);
  const request = await fetch(url, axiosConfig)
    .then((res: any) => res.json())
    .catch((err) => err);

  return request;
};

export default api;
