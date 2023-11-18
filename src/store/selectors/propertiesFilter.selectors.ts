import { createSelector } from "@reduxjs/toolkit";
import { RootStateT } from "store/store";

const selectedPropertyFilterStatus = ({ propertiesFilter }: RootStateT) => ({
  error: propertiesFilter.status.error,
  loading: propertiesFilter.status.loading,
  message: propertiesFilter.status.message,
  status: propertiesFilter.status.status,
});

const selectedPropertyFilter = ({ propertiesFilter }: RootStateT) => ({
  sort: propertiesFilter.filter.sort,
  propertyStatus: propertiesFilter.filter.propertyStatus,
  city: propertiesFilter.filter.city,
  country: propertiesFilter.filter.country,
  features: propertiesFilter.filter.features,
  propertyType: propertiesFilter.filter.propertyType,
  rooms: propertiesFilter.filter.rooms,
  state: propertiesFilter.filter.state,
});

const selectPropertyFilterStatus = createSelector(
  selectedPropertyFilterStatus,
  (status) => status
);
const selectPropertyFilter = createSelector(
  selectedPropertyFilter,
  (filter) => filter
);

export { selectPropertyFilterStatus, selectPropertyFilter };
