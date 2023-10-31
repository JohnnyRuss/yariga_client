import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { paths } from "config/paths";
import { RouterHistory } from "config/config";
import { controlStatus as status } from "./helpers";
import { UsersStateT } from "interface/store/user.types";
import { GetUserArgsT, UserT, UpdateUserArgsT } from "interface/db/user.types";

const userDefault = {
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
    lat: "",
    lon: "",
  },
};

const initialState: UsersStateT = {
  status: status.default(),

  editProfileStatus: status.default(),

  user: userDefault,

  guest: userDefault,
};

const userSlice = createSlice({
  name: "yariga-users",
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<UserT>) {
      state.user = payload;
    },

    cleanUpUser(state) {
      state.user = initialState.user;
    },

    getUser: {
      prepare: (payload: GetUserArgsT) => {
        return { payload };
      },

      reducer: (state) => {
        state.status = status.loading();
      },
    },

    setGuest(state, { payload }: PayloadAction<UserT>) {
      state.guest = payload;
      state.status = status.default();
    },

    cleanUpGuest(state) {
      state.guest = initialState.guest;
    },

    updateUser: {
      prepare(payload: UpdateUserArgsT) {
        return {
          payload,
        };
      },

      reducer(state) {
        state.editProfileStatus = status.loading();
      },
    },

    setUpdatedUser(state, { payload }: PayloadAction<UserT>) {
      state.user = payload;
      state.editProfileStatus = status.default();

      RouterHistory.navigate(paths.user_iprofile_page);
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
