import {
  controlStatus as status,
  setStatus,
  SetStatusArgsT,
} from "./helpers/controlStatus";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthStateT } from "interface/store/auth.types";
import * as AuthT from "interface/db/auth.types";

import { PATHS } from "config/paths";
import { setJWT, removeJWT } from "utils/jwt";
import { RouterHistory } from "config/config";

const initialState: AuthStateT = {
  status: status.default(),
  deleteAccountStatus: status.default(),
};

const authSlice = createSlice({
  name: "yariga-auth",
  initialState,
  reducers: {
    googleLogin: {
      prepare: (payload: AuthT.GoogleLoginArgsT) => {
        return { payload };
      },
      reducer: (state) => {
        state.status = status.loading();
      },
    },

    signIn: {
      prepare: (payload: AuthT.SignInArgsT) => {
        return { payload };
      },
      reducer: (state) => {
        state.status = status.loading();
      },
    },

    signUp: {
      prepare: (payload: AuthT.SignUpArgsT) => {
        return { payload };
      },
      reducer: (state) => {
        state.status = status.loading();
      },
    },

    setAuthenticatedUser(
      state,
      { payload }: PayloadAction<{ accessToken: string }>
    ) {
      setJWT(payload.accessToken);
      RouterHistory.navigate(PATHS.root_page);
      state.status = status.default();
    },

    logout() {},

    cleanUpUser(state) {
      removeJWT();
      RouterHistory.navigate(PATHS.auth_page_root);
    },

    forgotPassword: {
      prepare: (payload: AuthT.ForgotPasswordArgsT) => {
        return { payload };
      },
      reducer: (state) => {
        state.status = status.loading();
      },
    },

    setForgotPassword(state) {
      RouterHistory.navigate(PATHS.auth_page_confirm_email, {
        state: { isProcessingPasswordUpdate: true },
      });
      state.status = status.default();
    },

    confirmEmail: {
      prepare: (payload: AuthT.ConfirmEmailArgsT) => {
        return { payload };
      },
      reducer: (state) => {
        state.status = status.loading();
      },
    },

    setConfirmEmail(state) {
      RouterHistory.navigate(PATHS.auth_page_update_password, {
        state: { emailIsConfirmed: true },
      });
      state.status = status.default();
    },

    updatePassword: {
      prepare: (payload: AuthT.UpdatePasswordArgsT) => {
        return { payload };
      },
      reducer: (state) => {
        state.status = status.loading();
      },
    },

    setUpdatePassword(state) {
      RouterHistory.navigate(PATHS.auth_page_signin);
      state.status = status.default();
    },

    setAuthStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.status = setStatus({
        stage,
        message: message || "Operation Failed",
      });
    },

    cleanUpAuthStatus(state) {
      state.status = status.default();
    },

    deleteAccount(state, { payload }: PayloadAction<AuthT.DeleteAccountArgsT>) {
      // state.deleteAccountStatus = status.loading();
    },

    setDeletedAccount(state, { payload }: PayloadAction) {
      removeJWT();
      state.deleteAccountStatus = status.default();
      RouterHistory.navigate(PATHS.deleted_account_page, {
        state: { deactivated: true },
      });
    },

    setDeleteAccountStatus(
      state,
      { payload: { stage, message } }: PayloadAction<SetStatusArgsT>
    ) {
      state.deleteAccountStatus = setStatus({
        stage,
        message: message || "Operation Failed",
      });
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
