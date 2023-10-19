import { createSelector } from "@reduxjs/toolkit";

import { RootStateT } from "store/store";
import { PropertiesStateT } from "interface/store/properties.types";

const selectedPropertiesStatus = ({
  properties,
}: RootStateT): PropertiesStateT["status"] => ({
  error: properties.status.error,
  loading: properties.status.loading,
  message: properties.status.message,
  status: properties.status.status,
});

const selectPropertiesStatus = createSelector(
  selectedPropertiesStatus,
  (status) => status
);

export { selectPropertiesStatus };
