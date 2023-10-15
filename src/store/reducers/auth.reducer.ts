import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LoginResponseT } from "interface/db/user.types";
import { AuthStateT, LoginArgsT } from "interface/store/auth.types";

import paths from "config/paths";
import { controlStatus } from "./helpers";
import { setJWT, removeJWT } from "utils/jwt";
import { RouterHistory } from "config/config";

const initialState: AuthStateT = {
  status: controlStatus.default(),
  user: null,
};

const authSlice = createSlice({
  name: "yariga-auth",
  initialState,
  reducers: {
    login: {
      prepare: (payload: LoginArgsT) => {
        return { payload };
      },
      reducer: (state) => {
        state.status = controlStatus.loading();
      },
    },

    setAuthenticatedUser(state, { payload }: PayloadAction<LoginResponseT>) {
      setJWT(payload.accessToken);
      state.user = payload.user;
      RouterHistory.navigate(paths.root_page);
      state.status = controlStatus.default();
    },

    logout() {},

    cleanUpUser(state) {
      console.log("runs");
      removeJWT();
      state.user = null;
      RouterHistory.navigate(paths.auth_page);
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
