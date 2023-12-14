import { axiosPublicQuery, axiosPrivateQuery } from "services/axios";
import * as AuthT from "interface/db/auth.types";

export async function googleLoginQuery(data: AuthT.GoogleLoginArgsT) {
  return axiosPublicQuery.post("/auth/login/google", data);
}

export async function signInQuery(data: AuthT.SignInArgsT) {
  return axiosPublicQuery.post("/auth/signin", data);
}

export async function signUpQuery(data: AuthT.SignUpArgsT) {
  return axiosPublicQuery.post("/auth/signup", data);
}

export async function logoutQuery() {
  return axiosPrivateQuery.post("/auth/logout");
}

export async function forgotPasswordQuery(data: AuthT.ForgotPasswordArgsT) {
  return "";
}

export async function confirmEmailQuery(data: AuthT.ConfirmEmailArgsT) {
  return "";
}

export async function updatePasswordQuery(data: AuthT.UpdatePasswordArgsT) {
  return "";
}

export async function deleteAccountQuery(data: AuthT.DeleteAccountArgsT) {
  return axiosPrivateQuery.post(`/users/${data.userId}/delete`, {
    password: data.password,
  });
}
