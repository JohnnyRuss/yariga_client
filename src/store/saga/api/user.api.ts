import {
  GetGuestArgsT,
  UpdateUserArgsT,
  UpdateProfileImageArgsT,
} from "interface/db/user.types";
import { axiosPrivateQuery, axiosPrivateFormDataQuery } from "services/axios";

export function getUserQuery(data: GetGuestArgsT) {
  return axiosPrivateQuery.get(`/users/${data.userId}`);
}

export function updateUserQuery(data: UpdateUserArgsT) {
  return axiosPrivateQuery.put(`/users/${data.userId}`, data.data);
}

export function updateProfileImageQuery(data: UpdateProfileImageArgsT) {
  return axiosPrivateFormDataQuery.post(`/users/${data.userId}/profile`, {
    file: data.file,
  });
}

export function searchUsersQuery(key: string) {
  return axiosPrivateQuery.get(`/users/search?search=${key}`);
}
