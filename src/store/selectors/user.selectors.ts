import { createSelector } from "@reduxjs/toolkit";
import { RootStateT } from "store/store";

const selectedUser = ({ user }: RootStateT) => ({
  _id: user.user?._id || "",
  email: user.user?.email || "",
  avatar: user.user?.avatar || "",
  username: user.user?.username || "",
  phone: user.user?.phone || "",
  location: user.user?.location,
});

const selectUser = createSelector(selectedUser, (user) => user);

export { selectUser };
