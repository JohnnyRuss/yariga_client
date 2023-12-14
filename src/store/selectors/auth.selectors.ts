import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

// MEMORISED SELECTORS
const selectedAuthStatus = ({ auth }: RootStateT) => ({
  error: auth.status.error,
  loading: auth.status.loading,
  message: auth.status.message,
  status: auth.status.status,
});

const selectedDeleteAccountStatus = ({ auth }: RootStateT) => ({
  error: auth.deleteAccountStatus.error,
  loading: auth.deleteAccountStatus.loading,
  message: auth.deleteAccountStatus.message,
  status: auth.deleteAccountStatus.status,
});

// SELECTORS
const selectAuthStatus = createSelector(selectedAuthStatus, (status) => status);

const selectDeleteAccountStatus = createSelector(
  selectedDeleteAccountStatus,
  (status) => status
);

export { selectAuthStatus, selectDeleteAccountStatus };
