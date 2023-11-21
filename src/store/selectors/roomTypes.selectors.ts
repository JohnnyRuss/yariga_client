import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

// MEMORISED SELECTORS
const selectedStatus = ({ properties }: RootStateT) => ({
  error: properties.agentPropertiesStatus.error,
  loading: properties.agentPropertiesStatus.loading,
  message: properties.agentPropertiesStatus.message,
  status: properties.agentPropertiesStatus.status,
});

// SELECTORS
const selectRoomTypes = ({ roomTypes }: RootStateT) => roomTypes.roomTypes;

const selectRoomTypesStatus = createSelector(
  selectedStatus,
  (status) => status
);

export { selectRoomTypesStatus, selectRoomTypes };
