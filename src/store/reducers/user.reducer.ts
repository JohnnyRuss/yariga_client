import {
  controlStatus as status,
  setStatus,
  SetStatusArgsT,
} from "./helpers/controlStatus";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PATHS } from "config/paths";
import { RouterHistory } from "config/config";
import { UsersStateT } from "interface/store/user.types";
import {
  UserT,
  GetGuestArgsT,
  UpdateUserArgsT,
  UpdateProfileImageArgsT,
  UpdateProfileImageResponseT,
} from "interface/db/user.types";

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

    // GUEST
    getGuest: {
      prepare: (payload: GetGuestArgsT) => {
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

    setGuestStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.status = setStatus({
        stage,
        message: message || "Failed to read user details",
      });
    },

    cleanUpGuest(state) {
      state.guest = initialState.guest;
    },

    // USER UPDATE
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

      RouterHistory.navigate(PATHS.user_iprofile_page);
    },

    updateProfileImage: {
      prepare: (payload: UpdateProfileImageArgsT) => {
        return { payload };
      },

      reducer: (state) => {
        state.editProfileStatus = status.loading();
      },
    },

    setUpdatedProfileImage(
      state,
      { payload }: PayloadAction<UpdateProfileImageResponseT>
    ) {
      state.user.avatar = payload.url;
      state.editProfileStatus = status.success("SUCCESS");
    },

    setEditProfileStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.editProfileStatus = setStatus({
        stage,
        message: message || "Failed to update user profile",
      });
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
