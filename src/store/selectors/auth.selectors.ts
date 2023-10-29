import { createSelector } from "@reduxjs/toolkit";

import { RootStateT } from "store/store";

const selectedAuthStatus = ({ auth }: RootStateT) => ({
  error: auth.status.error,
  loading: auth.status.loading,
  message: auth.status.message,
  status: auth.status.status,
});

const selectedAuthenticatedUser = ({ auth }: RootStateT) => ({
  _id: auth.user?._id || "",
  email: auth.user?.email || "",
  avatar: auth.user?.avatar || "",
  username: auth.user?.username || "",
  phone: auth.user?.phone || "",
  location: auth.user?.location,
});

const selectAuthenticatedUser = createSelector(
  selectedAuthenticatedUser,
  (user) => user
);

const selectAuthStatus = createSelector(selectedAuthStatus, (status) => status);

export { selectAuthenticatedUser, selectAuthStatus };
