import { axiosPrivateQuery } from "services/axios";
import { GetUserArgsT, UpdateUserArgsT } from "interface/db/user.types";

export function getUserQuery(data: GetUserArgsT) {
  return axiosPrivateQuery.get(`/users/${data.userId}`);
}

export function updateUserQuery(data: UpdateUserArgsT) {
  return axiosPrivateQuery.put(`/users/${data.userId}`, data.data);
}
