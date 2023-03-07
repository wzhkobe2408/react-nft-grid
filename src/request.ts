import axios, { AxiosRequestConfig } from "axios";

const serviceAxios = axios.create({
  timeout: 5000,
  baseURL: "http://localhost:3001",
  withCredentials: false,
});

serviceAxios.interceptors.request.use(
  (config) => {
    if (!config.headers["content-type"]) {
      if (config.method === "post") {
        config.headers["content-type"] = "application/json";
      }
    }
    console.log("请求配置", config);
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

serviceAxios.interceptors.response.use(
  (res) => {
    let data = res.data;
    return data;
  },
  (error) => {
    let message = "";
    if (error && error.response) {
      switch (error.response.status) {
        case 302:
          message = "接口重定向了！";
          break;
        default:
          message = "异常问题，请联系管理员！";
          break;
      }
    }
    return Promise.reject(message);
  }
);

type HttpResponse<T extends any> = {
  code: number;
  data: T;
  message: string;
};

export const request = <T extends any>(config: AxiosRequestConfig) => {
  return serviceAxios
    .request<HttpResponse<T>>(config)
    .then((resp) => {
      if (resp.code === 0) {
        return resp.data;
      } else {
        return Promise.reject(resp.message);
      }
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
