import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_API_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 400) {
      return error.response;
    }

    return error;
  }
);
