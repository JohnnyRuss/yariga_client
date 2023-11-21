import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

// MEMORISED SELECTORS
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

// SELECTORS
const selectPropertyFilterStatus = createSelector(
  selectedPropertyFilterStatus,
  (status) => status
);
const selectPropertyFilter = createSelector(
  selectedPropertyFilter,
  (filter) => filter
);

export { selectPropertyFilterStatus, selectPropertyFilter };
