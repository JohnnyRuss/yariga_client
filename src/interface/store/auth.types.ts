import { LoadingStatusT } from "./common.types";

type AuthStateT = {
  status: LoadingStatusT;
};

type GoogleLoginArgsT = {
  email: string;
  avatar?: string;
  username: string;
};

type SignInArgsT = {
  email: string;
  password: string;
};

type SignUpArgsT = {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
};

type ForgotPasswordArgsT = {
  email: string;
};

type ConfirmEmailArgsT = {
  pin: number;
};

type UpdatePasswordArgsT = {
  new_password: string;
  confirm_password: string;
};

export type {
  AuthStateT,
  GoogleLoginArgsT,
  SignInArgsT,
  SignUpArgsT,
  ForgotPasswordArgsT,
  ConfirmEmailArgsT,
  UpdatePasswordArgsT,
};
