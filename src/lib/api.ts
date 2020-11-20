import Axios, { AxiosResponse } from "axios";

export const BASE_URL = "http://15.164.245.146";

export const JWT_TOKEN = "JWT";
export const REFRESH_TOKEN = "REFRESH";

export const BASE_IMG_URL =
  "https://pipi-project.s3.ap-northeast-2.amazonaws.com";

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

export const requestApiWithAccessToken = async (
  method: MethodType,
  url: string,
  body?: any,
  headers?: any
): ReturnType => {
  try {
    const accessToken = window.localStorage.getItem(JWT_TOKEN);
    const res = await Axios({
      baseURL: BASE_URL,
      method,
      url,
      data: body,
      headers: {
        ...headers,
        Authorization: "Bearer " + accessToken
      }
    });

    return res;
  } catch (err) {
    throw err.response.status;
  }
};

export const checkIsLogin = async () => {
  try {
    await requestApiWithAccessToken("get", "/user/token");
    return true;
  } catch (err) {
    return false;
  }
};
