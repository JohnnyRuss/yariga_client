import { UserT } from "./user.types";

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

type DeleteAccountArgsT = {
  userId: string;
  password: string;
};

type LoginResponseT = {
  user: UserT;
  accessToken: string;
};

export type {
  GoogleLoginArgsT,
  SignInArgsT,
  SignUpArgsT,
  ForgotPasswordArgsT,
  ConfirmEmailArgsT,
  UpdatePasswordArgsT,
  DeleteAccountArgsT,
  LoginResponseT,
};
