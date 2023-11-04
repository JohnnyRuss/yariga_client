import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectedCreatePropertyStatus = ({ createPropertyForm }: RootStateT) => ({
  error: createPropertyForm.status.error,
  loading: createPropertyForm.status.loading,
  message: createPropertyForm.status.message,
  status: createPropertyForm.status.status,
});

const selectedPropertySuggestions = ({ createPropertyForm }: RootStateT) =>
  createPropertyForm.suggestions;

const selectCreatePropertyStatus = createSelector(
  selectedCreatePropertyStatus,
  (status) => status
);

const selectPropertySuggestions = createSelector(
  selectedPropertySuggestions,
  (suggestions) => suggestions
);

export { selectCreatePropertyStatus, selectPropertySuggestions };
