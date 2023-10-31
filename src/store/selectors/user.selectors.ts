import { createSelector } from "@reduxjs/toolkit";
import { RootStateT } from "store/store";

const selectedUserStatus = ({ user }: RootStateT) => ({
  error: user.status.error,
  loading: user.status.loading,
  message: user.status.message,
  status: user.status.status,
});

const selectedEditProfileStatus = ({ user }: RootStateT) => ({
  error: user.editProfileStatus.error,
  loading: user.editProfileStatus.loading,
  message: user.editProfileStatus.message,
  status: user.editProfileStatus.status,
});

const selectedAuthenticatedUser = ({ user }: RootStateT) => ({
  _id: user.user?._id || "",
  email: user.user?.email || "",
  avatar: user.user?.avatar || "",
  username: user.user?.username || "",
  phone: user.user?.phone || "",
  location: user.user?.location,
});

const selectedGuest = ({ user }: RootStateT) => ({
  _id: user.guest?._id || "",
  email: user.guest?.email || "",
  avatar: user.guest?.avatar || "",
  username: user.guest?.username || "",
  phone: user.guest?.phone || "",
  location: user.guest?.location,
});

const selectGuest = createSelector(selectedGuest, (user) => user);

const selectAuthenticatedUser = createSelector(
  selectedAuthenticatedUser,
  (user) => user
);

const selectEditProfileStatus = createSelector(
  selectedEditProfileStatus,
  (status) => status
);

const selectUserStatus = createSelector(selectedUserStatus, (status) => status);

export {
  selectEditProfileStatus,
  selectUserStatus,
  selectGuest,
  selectAuthenticatedUser,
};
