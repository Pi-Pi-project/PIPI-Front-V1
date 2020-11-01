import Axios, { AxiosResponse } from "axios";

const BASE_URL = "http://10.156.145.141:8080";
export const JWT_TOKEN = "JWT";
export const REFRESH_TOKEN = "REFRESH";

type MethodType = "get" | "post" | "patch" | "put" | "delete";
type ReturnType = Promise<AxiosResponse<any>>;

export const requestApi = async (
  method: MethodType,
  url: string,
  body?: any,
  headers?: any
): ReturnType => {
  try {
    const res = await Axios({
      baseURL: BASE_URL,
      method,
      url,
      data: body,
      headers
    });

    return res;
  } catch (err) {
    throw err.response.status;
  }
};
