import { UserT } from "interface/db/user.types";
import { LoadingStatusT } from "./common.types";

type UsersStateT = {
  status: LoadingStatusT;
  editProfileStatus: LoadingStatusT;
  user: UserT;
  guest: UserT;
};

export type { UsersStateT };
