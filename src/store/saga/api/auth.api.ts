import { axiosPublicQuery, axiosPrivateQuery } from "services/axios";
import { LoginArgsT } from "interface/store/auth.types";

export async function loginQuery(data: LoginArgsT) {
  return axiosPublicQuery.post("/auth/login/google", data);
}

export async function logoutQuery() {
  return axiosPrivateQuery.post("/auth/logout");
}
