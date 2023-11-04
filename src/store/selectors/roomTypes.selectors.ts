import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectedStatus = ({ properties }: RootStateT) => ({
  error: properties.agentPropertiesStatus.error,
  loading: properties.agentPropertiesStatus.loading,
  message: properties.agentPropertiesStatus.message,
  status: properties.agentPropertiesStatus.status,
});

const selectRoomTypes = ({ roomTypes }: RootStateT) => roomTypes.roomTypes;

const selectRoomTypesStatus = createSelector(
  selectedStatus,
  (status) => status
);

export { selectRoomTypesStatus, selectRoomTypes };
