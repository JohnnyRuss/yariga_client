import { axiosPrivateQuery } from "services/axios";
import { GetUserArgsT } from "interface/db/user.types";

export function getUserQuery(data: GetUserArgsT) {
  return axiosPrivateQuery.get(`/users/${data.userId}`);
}
