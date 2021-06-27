import { Http, HttpResponse } from "src/infra/http";
import axios from "axios";

const http = (apiUrl: string): Http => {
  const get = async <T>(method: string): Promise<HttpResponse<T>> => {
    const { data } = await axios.get<HttpResponse<T>>(`${apiUrl}${method}`);
    return data;
  };

  const post = async <T>(
    method: string,
    payload: any
  ): Promise<HttpResponse<T>> => {
    const { data } = await axios.post<HttpResponse<T>>(
      `${apiUrl}${method}`,
      payload
    );
    return data;
  };

  const remove = async <T>(method: string): Promise<HttpResponse<T>> => {
    const { data } = await axios.delete<HttpResponse<T>>(`${apiUrl}${method}`);
    return data;
  };

  const put = async <T>(
    method: string,
    payload: any
  ): Promise<HttpResponse<T>> => {
    const { data } = await axios.put<HttpResponse<T>>(
      `${apiUrl}${method}`,
      payload
    );
    return data;
  };

  return {
    get,
    post,
    remove,
    put,
  };
};

export default http;
