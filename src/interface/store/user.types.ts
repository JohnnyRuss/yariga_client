import { UserT } from "interface/db/user.types";
import { LoadingStatusT } from "./common.types";

export interface UsersStateT {
  status: LoadingStatusT;
  editProfileStatus: LoadingStatusT;
  user: UserT;
  guest: UserT;
}
