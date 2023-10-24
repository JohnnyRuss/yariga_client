import { axiosPublicQuery, axiosPrivateQuery } from "services/axios";
import {
  GoogleLoginArgsT,
  SignInArgsT,
  SignUpArgsT,
  ForgotPasswordArgsT,
  ConfirmEmailArgsT,
  UpdatePasswordArgsT,
} from "interface/store/auth.types";

export async function googleLoginQuery(data: GoogleLoginArgsT) {
  return axiosPublicQuery.post("/auth/login/google", data);
}

export async function signInQuery(data: SignInArgsT) {
  return axiosPublicQuery.post("/auth/signin", data);
}

export async function signUpQuery(data: SignUpArgsT) {
  return axiosPublicQuery.post("/auth/signup", data);
}

export async function logoutQuery() {
  return axiosPrivateQuery.post("/auth/logout");
}

export async function forgotPasswordQuery(data: ForgotPasswordArgsT) {
  return "";
}

export async function confirmEmailQuery(data: ConfirmEmailArgsT) {
  return "";
}

export async function updatePasswordQuery(data: UpdatePasswordArgsT) {
  return "";
}
