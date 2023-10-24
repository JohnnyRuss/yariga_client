import { LoadingStatusT } from "./common.types";
import { UserT } from "interface/db/user.types";

export interface AuthStateT {
  status: LoadingStatusT;
  user: UserT | null;
}

export interface GoogleLoginArgsT {
  email: string;
  avatar?: string;
  username: string;
}

export interface SignInArgsT {
  email: string;
  password: string;
}

export interface SignUpArgsT {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface ForgotPasswordArgsT {
  email: string;
}

export interface ConfirmEmailArgsT {
  pin: number;
}

export interface UpdatePasswordArgsT {
  new_password: string;
  confirm_password: string;
}
