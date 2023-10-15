import axios, { InternalAxiosRequestConfig, AxiosError } from "axios";
import { getJWT, removeJWT, setJWT } from "utils/jwt";
import { API_ENDPOINT } from "config/env";
import decode, { JwtPayload } from "jwt-decode";

const axiosPublicQuery = axios.create({
  baseURL: API_ENDPOINT,
  withCredentials: true,
});

const axiosPrivateQuery = axios.create({
  baseURL: API_ENDPOINT,
  withCredentials: true,
});

let refreshTokenPromise: any = null;

axiosPrivateQuery.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => exchangeToken(config)
);

function exchangeToken(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig {
  const token = getJWT();

  const decodedUser: JwtPayload | null = token ? decode(token) : null;

  if (!decodedUser) return config;

  const exp = decodedUser.exp;
  const isExpired = Math.floor(Date.now() / 1000) > exp!;

  if (isExpired) {
    if (!refreshTokenPromise)
      refreshTokenPromise = axiosPublicQuery
        .get("/auth/refresh")
        .then(({ data }) => data.accessToken)
        .catch((error: AxiosError) => {
          if (error.response?.status === 401) removeJWT();
          return "";
        })
        .finally(() => (refreshTokenPromise = null));

    return refreshTokenPromise.then((token: string) => {
      setJWT(token);
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  } else {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}

export { axiosPublicQuery, axiosPrivateQuery };
