import axios, { AxiosRequestConfig } from "axios";

const serviceAxios = axios.create({
  timeout: 5000,
  baseURL: "",
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

type HttpResponse = {
  code: number;
  data: any;
  message: string;
};

export const request = (config: AxiosRequestConfig) => {
  return serviceAxios
    .request<HttpResponse>(config)
    .then((resp) => {
      if (resp.data.code === 0) {
        return resp.data;
      }
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
