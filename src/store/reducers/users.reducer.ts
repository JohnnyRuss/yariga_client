import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { controlStatus as status } from "./helpers";
import { UsersStateT } from "interface/store/user.types";
import { GetUserArgsT, UserT } from "interface/db/user.types";

const initialState: UsersStateT = {
  status: status.default(),

  user: {
    _id: "",
    avatar: "",
    email: "",
    username: "",
    phone: "",
    location: {
      name: "",
      displayName: "",
      addressType: "",
      country: "",
      state: "",
      city: "",
      postcode: "",
      lat: "",
      lon: "",
    },
  },
};

const usersSlice = createSlice({
  name: "yariga-users",
  initialState,
  reducers: {
    getUser: {
      prepare: (payload: GetUserArgsT) => {
        return { payload };
      },

      reducer: (state) => {
        state.status = status.loading();
      },
    },

    setUser(state, { payload }: PayloadAction<UserT>) {
      state.user = payload;
      state.status = status.default();
    },

    cleanUpUser(state) {
      state.user = initialState.user;
    },
  },
});

export const userActions = usersSlice.actions;
export default usersSlice.reducer;
