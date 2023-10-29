import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  AuthStateT,
  GoogleLoginArgsT,
  SignInArgsT,
  SignUpArgsT,
  ForgotPasswordArgsT,
  ConfirmEmailArgsT,
  UpdatePasswordArgsT,
} from "interface/store/auth.types";
import { LoginResponseT } from "interface/db/user.types";

import { paths } from "config/paths";
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
    googleLogin: {
      prepare: (payload: GoogleLoginArgsT) => {
        return { payload };
      },
      reducer: (state) => {
        state.status = controlStatus.loading();
      },
    },

    signIn: {
      prepare: (payload: SignInArgsT) => {
        return { payload };
      },
      reducer: (state) => {
        state.status = controlStatus.loading();
      },
    },

    signUp: {
      prepare: (payload: SignUpArgsT) => {
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
      removeJWT();
      state.user = null;
      RouterHistory.navigate(paths.auth_page_root);
    },

    forgotPassword: {
      prepare: (payload: ForgotPasswordArgsT) => {
        return { payload };
      },
      reducer: (state) => {
        state.status = controlStatus.loading();
      },
    },

    setForgotPassword(state) {
      RouterHistory.navigate(paths.auth_page_confirm_email);
      state.status = controlStatus.default();
    },

    confirmEmail: {
      prepare: (payload: ConfirmEmailArgsT) => {
        return { payload };
      },
      reducer: (state) => {
        state.status = controlStatus.loading();
      },
    },

    setConfirmEmail(state) {
      RouterHistory.navigate(paths.auth_page_update_password);
      state.status = controlStatus.default();
    },

    updatePassword: {
      prepare: (payload: UpdatePasswordArgsT) => {
        return { payload };
      },
      reducer: (state) => {
        state.status = controlStatus.loading();
      },
    },

    setUpdatePassword(state) {
      RouterHistory.navigate(paths.auth_page_signin);
      state.status = controlStatus.default();
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
