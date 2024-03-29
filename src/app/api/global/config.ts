import axios from "axios";
import API_ENDPOINT from ".";

const { REFRESH_TOKEN } = API_ENDPOINT;

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
});

api.interceptors.request.use(
  (config) => {
    const accessToken: string | null = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error): Promise<Error> => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.put(REFRESH_TOKEN, {
          refreshToken: localStorage.getItem("refreshToken"),
        });
        const newAccessToken = response.data.data.accessToken;
        localStorage.setItem("accessToken", newAccessToken);
        return api(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
