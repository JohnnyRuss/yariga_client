import { LoadingStatusT } from "./common.types";
import { UserT } from "interface/db/user.types";

export interface AuthStateT {
  status: LoadingStatusT;
  user: UserT | null;
}

export interface LoginArgsT {
  email: string;
  avatar: string;
  username: string;
}
