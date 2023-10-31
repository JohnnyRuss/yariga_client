import { createSelector } from "@reduxjs/toolkit";

import { RootStateT } from "store/store";

const selectedAuthStatus = ({ auth }: RootStateT) => ({
  error: auth.status.error,
  loading: auth.status.loading,
  message: auth.status.message,
  status: auth.status.status,
});

const selectAuthStatus = createSelector(selectedAuthStatus, (status) => status);

export { selectAuthStatus };
