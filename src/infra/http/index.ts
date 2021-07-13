import http from "src/infra/lib/axios";
const API_URL = "https://sn009i5l2l.execute-api.sa-east-1.amazonaws.com/dev";

export interface HttpResponse<T> {
  statusCode: number;
  body: T;
}

export interface Http {
  get<T = any>(method: string): Promise<HttpResponse<T>>;
  post<T = any>(method: string, payload: any): Promise<HttpResponse<T>>;
  remove<T = any>(method: string): Promise<HttpResponse<T>>;
  put<T = any>(method: string, payload: any): Promise<HttpResponse<T>>;
}

export default http(API_URL as string);
