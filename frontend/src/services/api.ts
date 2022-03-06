import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";

export const api = axios.create({
  baseURL: process.env.NEXT_API_URL,
});

const errorsToIntercept = [400, 401];

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      const { status } = error.response;

      if (errorsToIntercept.includes(status)) {
        return error.response;
      }
    }

    return error;
  }
);

const { "ecards.token": token } = parseCookies();

if (token) {
  api.defaults.headers.common.authorization = `Bearer ${token}`;
}
