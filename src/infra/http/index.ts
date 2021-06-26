import axios from "axios";

const http = (apiUrl: string) => {
  const get = async (method: string) => {
    return axios.get(`${apiUrl}${method}`);
  };

  const post = async (method: string, data: any) => {
    return axios.post(`${apiUrl}${method}`, data);
  };

  const remove = (method: string) => {
    return axios.delete(`${apiUrl}${method}`);
  };

  const put = (method: string, data: any) => {
    return axios.put(`${apiUrl}${method}`, data);
  };

  return {
    get,
    post,
    remove,
    put,
  };
};

export default http;
