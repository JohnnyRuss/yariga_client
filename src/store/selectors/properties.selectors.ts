import { createSelector } from "@reduxjs/toolkit";

import { RootStateT } from "store/store";

const selectedPropertiesStatus = ({ properties }: RootStateT) => ({
  error: properties.status.error,
  loading: properties.status.loading,
  message: properties.status.message,
  status: properties.status.status,
});

const selectedPropertySuggestions = ({ properties }: RootStateT) =>
  properties.suggestions;

const selectPropertiesStatus = createSelector(
  selectedPropertiesStatus,
  (status) => status
);

const selectPropertySuggestions = createSelector(
  selectedPropertySuggestions,
  (suggestions) => suggestions
);

const selectAllProperties = ({ properties }: RootStateT) =>
  properties.properties;

export {
  selectPropertiesStatus,
  selectAllProperties,
  selectPropertySuggestions,
};
