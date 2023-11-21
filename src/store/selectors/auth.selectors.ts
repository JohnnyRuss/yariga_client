import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

// MEMORISED SELECTORS
const selectedAuthStatus = ({ auth }: RootStateT) => ({
  error: auth.status.error,
  loading: auth.status.loading,
  message: auth.status.message,
  status: auth.status.status,
});

// SELECTORS
const selectAuthStatus = createSelector(selectedAuthStatus, (status) => status);

export { selectAuthStatus };
