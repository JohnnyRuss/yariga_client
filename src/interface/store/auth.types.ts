import { LoadingStatusT } from "./common.types";

type AuthStateT = {
  status: LoadingStatusT;
  deleteAccountStatus: LoadingStatusT;
};

export type { AuthStateT };
