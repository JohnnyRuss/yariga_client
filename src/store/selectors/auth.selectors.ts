import { createSelector } from "@reduxjs/toolkit";

import { RootStateT } from "store/store";
import { AuthStateT } from "interface/store/auth.types";

const selectedUser = ({ auth }: RootStateT): AuthStateT["user"] => ({
  _id: auth.user?._id || "",
  email: auth.user?.email || "",
  avatar: auth.user?.avatar || "",
  username: auth.user?.username || "",
  properties: auth.user?.properties || [],
});

const selectUser = createSelector(selectedUser, (user) => user);

export { selectUser };
